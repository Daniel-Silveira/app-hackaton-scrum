import axios from "axios";

export const API = "http://10.0.0.109:3001";

const instance = axios.create({
  baseURL: "http://10.0.0.109:3001",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
