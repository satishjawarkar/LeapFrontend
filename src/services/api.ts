import axios from "axios";

import { env } from "@/config/env";
import "./interceptor";
export const api = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});