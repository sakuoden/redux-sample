import { AxiosError, AxiosResponse } from "axios";
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
