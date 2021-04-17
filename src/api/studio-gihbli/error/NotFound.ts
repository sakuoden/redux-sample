import { AxiosError } from "axios";

class NotFound extends Error {
    private error: AxiosError;

    constructor(error: AxiosError) {
        super();
        this.error = error;
    }

    getMessage = (): string => this.error.message;
}

export default NotFound;
