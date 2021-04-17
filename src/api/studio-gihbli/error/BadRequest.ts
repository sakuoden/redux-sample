import { AxiosError } from "axios";

class BadRequest extends Error {
    private error: AxiosError;

    constructor(error: AxiosError) {
        super();
        this.error = error;
    }

    getMessage = (): string => this.error.message;
}

export default BadRequest;