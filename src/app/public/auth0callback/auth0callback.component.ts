import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService2 } from 'src/app/services/auth2.service';

@Component({
  selector: 'app-auth0callback',
  templateUrl: './auth0callback.component.html',
  styleUrls: ['./auth0callback.component.css']
})
export class Auth0callbackComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService2) {
   }

  ngOnInit(): void {
    this.auth.handleLoginCallback();
  }

}
