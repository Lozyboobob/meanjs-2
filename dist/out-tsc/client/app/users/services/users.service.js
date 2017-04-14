var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this._baseUrl = environment.backend.protocol + "://" + environment.backend.host;
        if (environment.backend.port) {
            this._baseUrl += ":" + environment.backend.port;
        }
    }
    UsersService.prototype.signup = function (user) {
        var backendURL = "" + this._baseUrl + environment.backend.endpoints.signup;
        return this.http.post(backendURL, user).map(function (response) { return response.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UsersService);
export { UsersService };
//# sourceMappingURL=../../../../../../client/app/users/services/users.service.js.map
