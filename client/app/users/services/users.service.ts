import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

import { User } from '../models/index';
import { environment } from "../../../environments/environment";
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsersService {

    private _baseUrl : string;
    constructor(private http: Http) {
       // build backend base url
        this._baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
            this._baseUrl += `:${environment.backend.port}`;
        }
    }
    signup(user: User): Observable<any> {
        let backendURL = `${this._baseUrl}${environment.backend.endpoints.signup}` ;
        return this.http.post(backendURL, user).map((response: Response) => response.json());
    }

    Auth(){
      return JSON.parse(localStorage.getItem('currentUser'));
    }
    getToken(){
      return JSON.parse(localStorage.getItem('token'));
    }

    getProfile (): Observable<any> {
      let token =this.getToken().token;
      let backendURL = `${this._baseUrl}${environment.backend.endpoints.users}/me` ;
      return this.http.get(backendURL, this.jwt(token)).map((response: Response) => response.json());
    }
    editProfile(user):Observable<any>{
      let token =this.getToken().token;
      let backendURL = `${this._baseUrl}${environment.backend.endpoints.users}` ;
      console.log('backendURL',backendURL)
      return this.http.put(backendURL,this.jwt(token), user).map((response: Response) => response.json());
    }
    // private helper methods
    jwt(token) {
        // create authorization header with jwt token
        if (token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + token, 'Content-Type': 'application/json'});
            return new RequestOptions({ headers: headers });
        }
    }
}
