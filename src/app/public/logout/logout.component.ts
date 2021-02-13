import { Component, OnInit } from '@angular/core';
import { AuthService2 } from 'src/app/services/auth2.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['../login/login.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService2) { 
    this.auth.logout();
  }

  ngOnInit(): void {
  }

}
