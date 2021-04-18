import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { filmReducer, FilmState } from "./films";
import { numberReducer, NumberState } from "./number";

export type Store = {
    numberState: NumberState,
    filmState: FilmState,
};

const rootReducer = combineReducers<Store>({
    numberState: numberReducer,
    filmState: filmReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
