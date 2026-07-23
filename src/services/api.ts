import axios from "axios";

import "./interceptor";
import { env } from "../config/env";
export const api = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
