import { ApiConstants } from "../utils/apiUrl"
import { httputil } from "../utils/HttpUtil";

export const getMembershipDirectoryList = async (
    RequestBody: any
) => {
    const baseUrl = "https://dummyjson.com"
    const resp = await httputil.get(
        baseUrl,
        ApiConstants.getMembershipDirectory,
        RequestBody,
        null,
    );

    return resp;
};