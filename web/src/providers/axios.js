import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://me-dev.trueddns.com:59771",
});

export { httpClient };
