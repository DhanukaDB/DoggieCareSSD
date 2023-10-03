import axios from "axios";

export const http = axios.create({
    baseURL: "https://dogycare-backend-ssd.onrender.com",
});