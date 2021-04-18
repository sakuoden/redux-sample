import { Reducer } from "redux";
import Film from "../api/studio-gihbli/films/filmid/Film";
import FilmsResource from "../api/studio-gihbli/films/FilmsResource";
import { plus } from "./number";

// State
export type FilmState = {
    // TODO: BadRequest, NotFoundを実装とするApiError interfaceを作って、ApiErrorを型にした方が良いかも。
    requestFailed: boolean;
    film: Film;
};

export const initalState: FilmState = {
    requestFailed: false,
    film: {
        id: "",
        title: "",
        original_title: "",
        original_title_romanised: "",
        description: "",
        director: "",
        producer: "",
        release_date: "",
        running_time: "",
        rt_score: "",
        people: [],
        species: [],
        locations: [],
        vehicles: [],
        url: "",
    }
};

// Actions
const FilmActionType = {
    requestStart: 'film/request_start',
    requestSuccess: 'film/request_success',
    requestFailed: 'film/request_failed',
} as const;

type FilmActionType = typeof FilmActionType[keyof typeof FilmActionType];

type FilmAction = {
    type: FilmActionType;
    payload: {
        film: Film,
    };
};

// Reducer
export const filmReducer: Reducer<FilmState, FilmAction> = (
    preState: FilmState = initalState,
    action: FilmAction
): FilmState => {
    switch (action.type) {
        case FilmActionType.requestStart:
            return preState;
        case FilmActionType.requestSuccess:
            return {
                ...preState,
                requestFailed: false,
                film: action.payload.film,
            }
        case FilmActionType.requestFailed:
            return {
                ...preState,
                requestFailed: true,
                film: initalState.film,
            }
        default: {
            const _: never = action.type

            return preState;
        }
    }
};
