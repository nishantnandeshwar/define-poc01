import { createAPIRequestAction } from "../../utils/ActionCreator";
import { getMembershipDirectoryList } from "../../services/getMembershipDirectory.service";
import { MEMBER_LIST_ACTION_TYPES } from "../types/memberList.type";

export const memberListService = (
    requestBody: any
) =>
    createAPIRequestAction<string>(
        MEMBER_LIST_ACTION_TYPES.MEMBER_LIST_SUCCESS,
        async () => {
            const response = await getMembershipDirectoryList(requestBody);
            return response?.data;
        }, true
    );