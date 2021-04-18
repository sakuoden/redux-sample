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

export type FilmAction = {
    type: FilmActionType;
    payload?: {
        id: string,
    };
    error?: boolean,
};
