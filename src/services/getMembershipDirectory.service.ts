import { getRequest } from "../utils/apiClient"
import { ApiConstants } from "../utils/apiUrl"

type Member = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
};

type getMemberDataProps = {
    users: Member[];
    total: number
}

export const getMembershipDirectoryList = async (RequestBody: any) => {
    try {
        const res = await getRequest<getMemberDataProps>(
            ApiConstants.getMembershipDirectory,
            RequestBody
        );
        return res;
    } catch (err) {
        console.log("err:", err);
        return undefined;
    }
}