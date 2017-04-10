import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Injectable()
export class SessionActions {
  static LOGIN_USER = 'LOGIN_USER';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
  static LOGOUT_USER = 'LOGOUT_USER';
  static PUT_USER = 'PUT_USER';
  static PUT_USER_SUCCESS = 'PUT_USER_SUCCESS';
  static PUT_USER_ERROR = 'PUT_USER_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  loginUser(credentials) {
    this.ngRedux.dispatch({
      type: SessionActions.LOGIN_USER,
      payload: credentials,
    });
  };

  logoutUser() {
    return this.ngRedux.dispatch({ type: SessionActions.LOGOUT_USER });
  };

  editProfile(user) {
    this.ngRedux.dispatch({
      type: SessionActions.PUT_USER,
      payload: user,
    });
  }
}

export interface IPayloadAction extends Action {
  payload?: any;
}
