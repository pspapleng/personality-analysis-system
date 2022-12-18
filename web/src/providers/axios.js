import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://me-dev.trueddns.com:59771",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export { httpClient };
