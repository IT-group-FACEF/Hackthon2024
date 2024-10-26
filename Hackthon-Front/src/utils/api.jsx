import axios from "axios";

let api = axios.create({
  //baseURL: 'http://localhost:8080/api'
  //baseURL: "http://184.73.198.138",
  baseURL: 'http://localhost/hackthon/Hackthon-Back',
  timeout: 90000,
});

export { api };
