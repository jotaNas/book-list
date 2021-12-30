import axios from "axios";

const api = axios.create({
  baseURL: "https://hn.algolia.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
