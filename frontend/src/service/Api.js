import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002/auth",
  withCredentials: true,
});

export const signup = (data) => API.post("/signup", data);

export const login = (data) => API.post("/login", data);

export const logout = () => API.get("/logout");
