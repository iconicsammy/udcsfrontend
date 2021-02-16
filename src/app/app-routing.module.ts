import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { Auth0callbackComponent } from './public/auth0callback/auth0callback.component';
import { HomeComponent } from './member/home/home.component';
import { FormulaComponent } from './member/formula/formula.component';
import { UploadComponent } from './member/upload/upload.component';
import { LogoutComponent } from './public/logout/logout.component';
import { AuthGuard } from './services/authGuard';
const routes: Routes = [
  {
    path: 'public/login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'public/callback',
    component: Auth0callbackComponent
  },
  {
    path: 'member/home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'member/formula',
    component: FormulaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'member/gallery/:walkId',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'public/logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
