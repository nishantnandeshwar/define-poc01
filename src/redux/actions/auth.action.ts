import { loginService } from "../../services/login.service";
import { createAPIRequestAction } from "../../utils/ActionCreator";
import { action } from 'typesafe-actions';
import { USER_AUTH_ACTION_TYPES } from "../types/auth.type";

export const loginUserService = (
    baseUrl: string,
    apiKey: string,
    username: string,
    password: string,
) =>
    createAPIRequestAction<string>(
        USER_AUTH_ACTION_TYPES.LOGIN_SUCCESS,
        async () => {
            const response = await loginService(baseUrl, apiKey, username, password);
            return response?.data;
        }, true
    );


export const logout = () => action('LOGOUT');