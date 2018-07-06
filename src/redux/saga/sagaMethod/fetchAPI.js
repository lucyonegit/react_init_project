
import Api from "../../../fetchApi/api"
export const getp = payload => {
    return Api.getp(payload).then(res => res);
};
