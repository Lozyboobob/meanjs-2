var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { ToggleNavService } from '../toggle-nav.service';
import { NgRedux } from '@angular-redux/store';
var AppSidenavComponent = (function () {
    function AppSidenavComponent(ToggleNavService, ngRedux) {
        var _this = this;
        this.ToggleNavService = ToggleNavService;
        this.ngRedux = ngRedux;
        this.isNormalScreen = true;
        this.sideNavLock = false;
        this.menuList = [];
        var homeItem = {
            state: 'home',
            title: 'Home',
            icon: 'fa-home',
            roles: ['*']
        };
        var articleItem = {
            state: 'article',
            title: 'Articles',
            icon: 'fa-user-secret',
            roles: ['*']
        };
        this.menuList.push(homeItem);
        this.menuList.push(articleItem);
        this.subscription = this.ToggleNavService.toggle().subscribe(function (toggled) {
            _this.isToggled = toggled;
        });
        this.ngRedux.subscribe(() =>{
          this.state=this.ngRedux.getState();
        })
    }
    AppSidenavComponent.prototype.ngOnInit = function () { };
    AppSidenavComponent.prototype.ngAfterViewInit = function () {
        var sidenav = this.sidenav.nativeElement;
        console.log(sidenav);
        if (this.getCookie("pin") == "true") {
            this.isToggled = true;
            this.sideNavLock = true;
        }
    };
    AppSidenavComponent.prototype.toggleNav = function () {
        this.ToggleNavService.toggle();
    };
    AppSidenavComponent.prototype.changePinStatus = function () {
        if (this.getCookie("pin") == "") {
            this.setCookie("pin", "true", 365);
            this.sideNavLock = true;
        }
        else {
            if (this.getCookie("pin") == "true") {
                this.setCookie("pin", "false", 365);
                this.sideNavLock = false;
                this.toggleNav();
            }
            else {
                this.setCookie("pin", "true", 365);
                this.sideNavLock = true;
            }
        }
        console.log("pin", document.cookie);
    };
    AppSidenavComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    AppSidenavComponent.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    AppSidenavComponent.prototype.clearCookie = function (cname) {
        this.setCookie("cname", "", -1);
    };
    return AppSidenavComponent;
}());
__decorate([
    select(function (s) { return s.session.token; }),
    __metadata("design:type", Observable)
], AppSidenavComponent.prototype, "loggedIn$", void 0);
__decorate([
    ViewChild('sidenav'),
    __metadata("design:type", ElementRef)
], AppSidenavComponent.prototype, "sidenav", void 0);
AppSidenavComponent = __decorate([
    Component({
        selector: 'app-app-sidenav',
        templateUrl: './app-sidenav.component.html',
        styleUrls: ['./app-sidenav.component.scss'],
    }),
    __metadata("design:paramtypes", [ToggleNavService, NgRedux])
], AppSidenavComponent);
export { AppSidenavComponent };
//# sourceMappingURL=../../../../../client/app/app-sidenav/app-sidenav.component.js.map
