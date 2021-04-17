import axios, { AxiosError, AxiosResponse } from "axios";
import BadRequest from "./BadRequest";
import NotFound from "./NotFound";

class AxiosErrorHandler {
    private axiosError: AxiosError;

    constructor(axiosError: AxiosError) {
        this.axiosError = axiosError;
    }

    extractResponse = (): AxiosResponse => {
        if (this.axiosError.response === undefined) {
            throw new Error("Errorのレスポンスがありません。");
        } else {
            return this.axiosError.response;
        }
    }

    throw = () => {
        if (this.extractResponse().status === 400) {
            throw new BadRequest(this.axiosError);
        }

        if (this.extractResponse().status === 404) {
            throw new NotFound(this.axiosError);
        }
    }
}

export default AxiosErrorHandler;
