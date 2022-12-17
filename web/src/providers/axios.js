import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://me-dev.trueddns.com:59771",
});

export { httpClient };
