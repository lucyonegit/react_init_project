import { put, call } from "redux-saga/effects";
import actionTypes from "../../action/actionType";
import { getp } from "../sagaMethod/fetchAPI";

export default function* get({ data }) {
    try {
        let res = yield call(getp, data);
        yield put({ type: actionTypes.SUCCEED, res });
    } catch (err) {
        yield put({ type: actionTypes.SUCCEED });
    }
}

// export function* getHouseFlow({ current }) {
//   yield call(getHouse, current);
// }
