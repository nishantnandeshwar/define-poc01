import { UnknownAction, Reducer } from '@reduxjs/toolkit';
import { USER_AUTH_ACTION_TYPES } from '../types/auth.type';


const initialUserAuthState: any = {
    user: {} as any,
};

interface LoginSuccessPayload {
    Record?: {
        User?: any;
    };
}

interface UserAuthAction extends UnknownAction {
    payload?: LoginSuccessPayload;
}

const userAuthReducer: Reducer<any> = (
    state = initialUserAuthState,
    action: UserAuthAction,
) => {
    console.log("action>>>", action)
    switch (action.type) {
        case USER_AUTH_ACTION_TYPES.LOGIN_FAILURE:
            return {};
        case USER_AUTH_ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload?.Record?.User,
            };
        case USER_AUTH_ACTION_TYPES.LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export { userAuthReducer as UserAuthReducer };