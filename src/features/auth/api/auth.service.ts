import { api } from "../../../services/api";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth";

export const authService = {
  login(payload: LoginRequest) {
    return api.post<LoginResponse>("/authentication/sign-in", payload);
  },

};
