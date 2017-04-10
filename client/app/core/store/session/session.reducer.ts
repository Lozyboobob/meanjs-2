import { SessionActions, IPayloadAction } from '../../actions/session.actions';
import { ISessionRecord } from './session.types';
import {
  INITIAL_STATE,
  INITIAL_USER_STATE,
  UserFactory,
} from './session.initial-state';
import {actionTypes} from 'redux-localstorage'

export const sessionReducer = (
  state: ISessionRecord = INITIAL_STATE,
  action: IPayloadAction) => {
  switch (action.type) {
    case SessionActions.LOGIN_USER:
      return state.merge({
        token: null,
        user: INITIAL_USER_STATE,
        hasError: false,
        isLoading: true
      });

    case SessionActions.LOGIN_USER_SUCCESS:
      console.log('state:', action.payload.user);
      localStorage.setItem('currentUser', JSON.stringify(UserFactory(action.payload.user)));
      return state.merge({
        token: action.payload.token,
        user: UserFactory(action.payload.user),
        hasError: false,
        isLoading: false,
        hasMessage :null
      });

    case SessionActions.LOGIN_USER_ERROR:
      return state.merge({
        token: null,
        user: INITIAL_USER_STATE,
        hasError: true,
        isLoading: false,
        hasMessage :null
      });

    case SessionActions.LOGOUT_USER:
      localStorage.removeItem('currentUser');
      return INITIAL_STATE;

    case actionTypes.INIT:
      const persistedState = action.payload;
      if (persistedState) {
        return state.merge({
          token: persistedState.session.token,
          user: UserFactory(persistedState.session.user),
          hasError: persistedState.session.hasError,
          isLoading: persistedState.session.isLoading,
        });
      }
      case SessionActions.PUT_USER :
       {
        return state.merge({
          token : JSON.parse(localStorage.getItem('token')).token,
          user: UserFactory(JSON.parse(localStorage.getItem('currentUser'))),
          hasMessage: action.payload,
          hasError: false,
          isLoading: true
        });
      }
        case SessionActions.PUT_USER_SUCCESS:
          return state.merge({
            token : JSON.parse(localStorage.getItem('token')).token,
            user: UserFactory(JSON.parse(localStorage.getItem('currentUser'))),
            hasMessage : action.payload,
            hasError: false,
            isLoading: false
          });

        case SessionActions.PUT_USER_ERROR:
          return state.merge({
            token: null,
            user: INITIAL_USER_STATE,
            hasError: true,
            isLoading: false,
            message:'error'

        });
    default:
      return state;
  }
}
