import { postRequest } from "../utils/apiClient"
import { ApiConstants } from "../utils/apiUrl"

type loginUserProps = {
    UserName: string;
    Password: string;
}
export const loginUserService = async (RequestBody: loginUserProps) => {
    try {
        const res: any = await postRequest(
            ApiConstants.login,
            RequestBody
        );
        return res;
    } catch (err) {
        console.log("err:", err);
        return undefined;
    }
}