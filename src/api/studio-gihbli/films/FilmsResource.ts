import { AxiosError, AxiosResponse } from "axios";
import AxiosErrorHandler from "../error/AxiosErrorHandler";
import BadRequest from "../error/BadRequest";
import studioGihbliHttpClient from "../studioGihbliHttpClient";
import Film from "./filmid/Film";

class FilmsResource {
    filmId = async (filmId: string): Promise<Film> => {
        try {
            const axiosResponse: AxiosResponse<Film> = await studioGihbliHttpClient.get(`/films/${filmId}`);
            return axiosResponse.data;
        } catch (error) {
            if (error.isAxiosError) {
                new AxiosErrorHandler(error).throw();
            }

            throw new Error(error.message);
        }
    }
}

export default FilmsResource;
