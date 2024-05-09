import axios from "axios";

export const apiKey = '12f6d299c541f8a377272b194dd76aaa';
export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})