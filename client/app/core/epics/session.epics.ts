import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { combineEpics } from 'redux-observable';
import { IPayloadAction, SessionActions } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Action } from 'redux';
import { environment } from "../../../environments/environment";


@Injectable()
export class SessionEpics {
  _baseUrl : string ;

  constructor(private http: Http) {
              this._baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
            this._baseUrl += `:${environment.backend.port}`;
        }
  }

  login = (action$: Observable<IPayloadAction>) => {
    return action$
      .filter<IPayloadAction>(({ type }) => type === SessionActions.LOGIN_USER)
      .mergeMap<IPayloadAction, IPayloadAction>(({ payload }) => {
        let backendURL = `${this._baseUrl}${environment.backend.endpoints.signin}` ;
        return this.http.post(backendURL, payload)
          .map<Response, IPayloadAction>(result => ({
            type: SessionActions.LOGIN_USER_SUCCESS,
            payload: result.json()
          }))
          .catch<any, Action>(() => Observable.of({
            type: SessionActions.LOGIN_USER_ERROR
          }));
        });
  }
  editProfile = (action$: Observable<IPayloadAction>) => {
    return action$
      .filter<IPayloadAction>(({ type }) => type === SessionActions.PUT_USER)
      .mergeMap<IPayloadAction, IPayloadAction>(({ payload }) => {
        let backendURL = `${this._baseUrl}${environment.backend.endpoints.users}` ;
        return this.http.put(backendURL,payload,this.jwt(this.getToken()))
          .map<Response, IPayloadAction>(result => ({
            type: SessionActions.PUT_USER_SUCCESS,
            payload: {type : 'success',message: 'Profile Saved Successfully'}
          }))
          .catch<any, Action>(() => Observable.of({
            type: SessionActions.PUT_USER_ERROR,
            payload: {type : 'echec',message: 'Profile not Saved Successfully'}

          }));
        });
    }

    private getToken(){
      return JSON.parse(localStorage.getItem('token')).token;
    }
    private jwt(token) {
        // create authorization header with jwt token
        if (token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + token, 'Content-Type': 'application/json'});
            return new RequestOptions({ headers: headers });
        }
    }

}
