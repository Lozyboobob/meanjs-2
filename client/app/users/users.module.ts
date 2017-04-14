import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER }       from '@angular/core';
import { UsersConfig } from './index';
import { LoginComponent } from './login/index';
import {RegisterComponent } from './register/index';
import {SettingsComponent} from './settings/index';
// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import { USERS_ROUTES } from './index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './settings/profile/profile.component';
import { PasswordComponent } from './settings/password/password.component';
import { EqualValidator } from './settings/password/equal-validator.directive';
import { ListComponent } from './list/list.component';
import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./services/interceptors/http.interceptor";
export function usersFactory(config: UsersConfig) {
  return () => config.addMenu() ;
}
export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptedHttp(xhrBackend, requestOptions);
}
@NgModule({
  imports: [
    USERS_ROUTES,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    ProfileComponent,
    PasswordComponent,
    EqualValidator,
    ListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ UsersConfig, OverlayContainer,
  { provide: APP_INITIALIZER, useFactory: usersFactory, deps: [UsersConfig], multi: true },
  { provide: Http,  useFactory: httpFactory, deps: [XHRBackend, RequestOptions]}
],
})
export class UsersModule {}
