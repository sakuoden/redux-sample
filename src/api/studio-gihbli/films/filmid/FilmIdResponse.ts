import { AxiosError, AxiosResponse } from "axios";
import Film from "./Film";

class FilmIdResponse {
    private axiosResponse: AxiosResponse<Film>;

    constructor(axiosResponse: AxiosResponse<Film>) {
        this.axiosResponse = axiosResponse;
    }

    createFilm = (): Film => this.axiosResponse.data;
}

export default FilmIdResponse;
