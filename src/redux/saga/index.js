import { takeEvery } from "redux-saga";

import main from "./sagaMethod/main"

import type from "../action/actionType"

export default function* mySaga() {
    yield [
        takeEvery(type.SUCCEED, main)
    ]
}