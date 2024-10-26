import axios from "axios";

let api = axios.create({
  //baseURL: 'http://localhost:8080/api'
  baseURL: "https://vivermais.online",
  timeout: 90000,
});

export { api };
