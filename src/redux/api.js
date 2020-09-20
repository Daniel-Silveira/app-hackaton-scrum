import axios from "axios";

export const API = "https://78176a28c984.ngrok.io";

const instance = axios.create({
  baseURL: "https://78176a28c984.ngrok.io",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
