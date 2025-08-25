import { ApiConstants } from "../utils/apiUrl";
import { httputil } from "../utils/HttpUtil";

export const loginService = async (
    baseUrl: string,
    apiKey: string,
    username: string,
    password: string,
) => {
    httputil.setApiConstants(baseUrl, apiKey);
    const resp = await httputil.post(
        ApiConstants.login,
        { UserName: username, Password: password },
        null,
        {},
    );

    return resp;
};