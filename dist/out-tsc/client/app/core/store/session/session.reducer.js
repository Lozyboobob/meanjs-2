import { SessionActions } from '../../actions/session.actions';
import { INITIAL_STATE, INITIAL_USER_STATE, UserFactory, } from './session.initial-state';
import { actionTypes } from 'redux-localstorage';
export var sessionReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    console.log("action", action);
    console.log("state", state);
    switch (action.type) {
        case SessionActions.LOGIN_USER:
            return state.merge({
                token: null,
                user: INITIAL_USER_STATE,
                hasError: false,
                isLoading: true
            });
        case SessionActions.LOGIN_USER_SUCCESS:
            return state.merge({
                token: action.payload.token,
                user: UserFactory(action.payload.user),
                hasError: false,
                isLoading: false,
            });
        case SessionActions.LOGIN_USER_ERROR:
            return state.merge({
                token: null,
                user: INITIAL_USER_STATE,
                hasError: true,
                isLoading: false,
            });
        case SessionActions.LOGOUT_USER:
            console.log("logout user state", action, state);
            console.log(INITIAL_STATE);
            return INITIAL_STATE;
        case actionTypes.INIT:
            var persistedState = action.payload;
            if (persistedState) {
                return state.merge({
                    token: persistedState.session.token,
                    user: UserFactory(persistedState.session.user),
                    hasError: persistedState.session.hasError,
                    isLoading: persistedState.session.isLoading,
                });
            }
        default:
            return state;
    }
};
//# sourceMappingURL=../../../../../../../client/app/core/store/session/session.reducer.js.map
