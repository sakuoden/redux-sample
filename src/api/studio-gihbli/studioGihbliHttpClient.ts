import axios from "axios";

const studioGihbliHttpClient = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com",
    headers: { "content-type": "application/json" },
    timeout: 7000
});

export default studioGihbliHttpClient;
