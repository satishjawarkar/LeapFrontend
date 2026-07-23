import { api } from "../../../services/api";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from "../types/auth";

export const authService = {
  login(payload: LoginRequest) {
    return api.post<LoginResponse>("/authentication/sign-in", payload);
  },

  register(payload: RegisterRequest) {
    return api.post("/authentication/sign-up", payload);
  },
};
