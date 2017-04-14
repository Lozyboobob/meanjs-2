var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { MaterialModule, OverlayContainer } from '@angular/material';
import 'hammerjs';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { APP_ROUTES } from './app.routes';
import { UsersService } from './users/index';
import { SessionActions } from './core/actions/session.actions';
import { SessionEpics } from './core/epics';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/index';
import { LoginComponent, RegisterComponent } from './users/index';
import { HomeComponent } from './home/home.component';
import { AppSidenavComponent } from './app-sidenav/index';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AppToolbarComponent,
            LoginComponent,
            RegisterComponent,
            HomeComponent,
            AppSidenavComponent
        ],
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            FormsModule,
            HttpModule,
            NgReduxModule,
            NgReduxRouterModule,
            APP_ROUTES,
            Angular2FontAwesomeModule,
            MaterialModule.forRoot()
        ],
        providers: [
            OverlayContainer,
            SessionActions,
            SessionEpics,
            UsersService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../../client/app/app.module.js.map
