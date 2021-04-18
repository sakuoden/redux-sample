import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/* eslint-disable no-underscore-dangle */
export const store = createStore(
        rootReducer,
        storeEnhancers(applyMiddleware(thunk)),
    );
/* eslint-enable */