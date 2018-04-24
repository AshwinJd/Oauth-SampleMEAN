import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import { LoginModule } from './login/login.module'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Http, Headers } from '@angular/http';
import { HttpModule } from "@angular/http";
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    SharedModule,
    LoginModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [AuthService, CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
