import { AxiosError, AxiosResponse } from "axios";
import BadRequest from "../error/BadRequest";
import studioGihbliHttpClient from "../studioGihbliHttpClient";
import Film from "./filmid/Film";
import FilmIdResponse from "./filmid/FilmIdResponse";

class FilmsResource {
    filmId = async (filmId: string): Promise<FilmIdResponse> => {
        try {
            const axiosResponse: AxiosResponse<Film> = await studioGihbliHttpClient.get(`/films/${filmId}`);
            
            return new FilmIdResponse(axiosResponse);
        } catch (error) {
            if (error.isAxiosError) {
                const axiosError: AxiosError = error;
                if (axiosError.response?.status === 400) {
                    throw new BadRequest(axiosError);
                }
            }

            throw new Error(error.message);
        }
    }
}

export default FilmsResource;
