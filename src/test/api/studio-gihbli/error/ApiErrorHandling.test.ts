import { AxiosError } from "axios";
import AxiosErrorHandler from "../../../../api/studio-gihbli/error/AxiosErrorHandler";
import BadRequest from "../../../../api/studio-gihbli/error/BadRequest";
import NotFound from "../../../../api/studio-gihbli/error/NotFound";

test("AxiosErrorのハンドリングが出来る", () => {
    const badRequest: AxiosError = {
        name: "dummyName",
        message: "dummyMessage",
        config: {},
        response: {
            data: {},
            status: 400,
            statusText: "dummyText",
            headers: {},
            config: {},
        },
        isAxiosError: true,
        toJSON: () => Object
    };
    expect(() => new AxiosErrorHandler(badRequest).throw()).toThrowError(BadRequest);

    const notFound: AxiosError = {
        name: "dummyName",
        message: "dummyMessage",
        config: {},
        response: {
            data: {},
            status: 404,
            statusText: "dummyText",
            headers: {},
            config: {},
        },
        isAxiosError: true,
        toJSON: () => Object
    };
    expect(() => new AxiosErrorHandler(notFound).throw()).toThrowError(NotFound);
});
