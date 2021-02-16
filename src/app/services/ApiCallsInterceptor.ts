import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiCallsInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token') || '';
    const goingToURL = httpRequest.url;
    if (goingToURL.startsWith(environment.awsURL)){

      return next.handle(httpRequest.clone({ setHeaders: { 
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
   
        } }));
    }
    return next.handle(httpRequest.clone());
  }
}