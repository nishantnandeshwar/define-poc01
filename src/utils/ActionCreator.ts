import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { action } from 'typesafe-actions';
import { getAPIError, getSafeVal, handleAPIError } from './utils';

export const createAPIRequestAction = <T>(
    successActionType: string,
    makeRequestCallback: () => Promise<T>,
    genericErrorHandle: boolean = true,
    errorCallback?: (e: any) => Promise<string>,
) => {
    return async (dispatch: ThunkDispatch<any, any, UnknownAction>) => {
        if (
            successActionType.lastIndexOf('SUCCESS') !==
            successActionType.length - 7
        ) {
            throw new Error(
                'Invalid Action Type : Action name must contain string SUCCESS',
            );
        }
        const actionName = successActionType.substring(
            0,
            successActionType.indexOf('SUCCESS'),
        );
        const failureActionType = actionName + 'FAILURE';
        const requestActionType = actionName + 'REQUEST';
        const successAction = (data: T) => action(successActionType, data);
        const failureAction = (error: string) => action(failureActionType, { error });
        const startRequestAction = () => action(requestActionType);

        try {
            dispatch(startRequestAction());
            const data: any = (await makeRequestCallback()) as T;
            if (getSafeVal(data, null)) {
                if (data.Status != 0) {
                    return dispatch(successAction(data));
                } else {
                    return dispatch(failureAction(getAPIError(data)));
                }
            } else {
                return dispatch(failureAction(getAPIError(null)));
            }
        } catch (e) {
            if (genericErrorHandle) {
                const error = handleAPIError(e);
                return dispatch(failureAction(error));
            } else {
                if (errorCallback) {
                    const error = await errorCallback(e);
                    return dispatch(failureAction(error));
                } else {
                    return dispatch(failureAction(getAPIError(e)));
                }
            }
        }
    };
};
