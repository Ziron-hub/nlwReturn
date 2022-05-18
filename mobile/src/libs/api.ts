import axios from "axios";

export const api = axios.create({
    baseURL: 'http://YOURIP:3333'
});