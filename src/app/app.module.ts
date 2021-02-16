import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { Auth0callbackComponent } from './public/auth0callback/auth0callback.component';
import { HomeComponent } from './member/home/home.component';
import { HeaderComponent } from './member/components/header/header.component';
import { WalkRowComponent } from './member/components/walk-row/walk-row.component';
import { WalkService } from './services/walk.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandler } from './services/httpErrorHandler';
import { NavmenuComponent } from './member/components/navmenu/navmenu.component';
import { FormulaComponent } from './member/formula/formula.component';
import { UploadComponent } from './member/upload/upload.component';
import { AuthService2 } from './services/auth2.service';
import { AuthGuard } from './services/authGuard';
import { ApiCallsInterceptor } from './services/ApiCallsInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './public/logout/logout.component';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Auth0callbackComponent,
    HomeComponent,
    HeaderComponent,
    WalkRowComponent,
    NavmenuComponent,
    FormulaComponent,
    UploadComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [WalkService,AuthService2, { provide: HTTP_INTERCEPTORS, useClass : ApiCallsInterceptor, multi: true }, HttpErrorHandler, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
