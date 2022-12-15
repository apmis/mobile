import { isLoggedInState } from "./reducers";
import { combineReducers, createStore  } from "redux";


const myReducers = combineReducers({
    isLoggedInState,
});


export const store = createStore(myReducers);
