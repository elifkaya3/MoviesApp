import axios from "axios";

export default class Api {
    constructor() {
        this.http = axios.create({ baseURL: process.env.VUE_APP_BASE_URL });
    }
    async getMovies() {
        try {
            const response = await this.http.get("/");
            return response.data;
        } catch (error) {
            console.error("Api error: ", error);
            return "service error";
        }
    }
     async getMovieDetail() {
        try {
            const response = await this.http.get("/");
            return response.data;
        } catch (error) {
            console.error("Api error: ", error);
            return "service error";
        }
    }
}