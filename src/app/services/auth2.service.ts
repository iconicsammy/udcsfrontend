import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService2 {
  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    responseType: 'token id_token',
    redirectUri: environment.auth.redirect,
    audience: environment.auth.audience,
    scope: environment.auth.scope
  });
  // Store authentication data
  userProfile: any;
  accessToken = undefined;
  authenticated: boolean = false;

  constructor(private router: Router) {
    // Check session to restore login if not expired
    this.getAccessToken();
  }

  login() {
    // Auth0 authorize request
    this.auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      this.router.navigate(['/member/home']);
    });
  }

  getAccessToken() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      } else if (err) {
        this.logout();
        this.authenticated = false;
      }
    });
  }

  getUserInfo(authResult: any) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
      }
    });
  }

  private _setSession(authResult: any, profile: any) {
    const expTime = authResult.expiresIn * 1000 + Date.now();
    // Save authentication data and update login status subject
    localStorage.setItem('expires_at', JSON.stringify(expTime));
    localStorage.setItem('token', authResult.idToken)
    localStorage.setItem("profile", JSON.stringify(profile));
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
  }

  logout() {
    // Remove auth data and update login status
    localStorage.removeItem('expires_at');
    localStorage.removeItem("token")
    localStorage.removeItem('profile')
    this.userProfile = undefined;
    this.accessToken = undefined;
    this.authenticated = false;
  }

  public isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '');
   if (!expiresAt){
     return false;
   }
    return Date.now() < expiresAt && this.authenticated;
  }

}
