import types from "../../action/actionType";
import Immutable from "immutable";


const initState = Immutable.Map({
    res: "我是来自reducer的state",
});

const main = (state = initState, action) => {
    switch (action.type) {
        case types.SUCCEED:
            console.log("reducer->main");
            return state.set("res", 1);
        default:
            return state;
    }
};

export default main;
