import { Component, OnInit } from '@angular/core';
import { AuthService2 } from '../../services/auth2.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService2) {}

  openAuth =   () => {
   this.auth.login();
  }

  ngOnInit(): void {}

}
