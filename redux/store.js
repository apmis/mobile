import { isLoggedInState,cartState,reRender } from "./reducers";
import { combineReducers, createStore  } from "redux";


const myReducers = combineReducers({
    isLoggedInState,cartState,reRender
});


export const store = createStore(myReducers);
