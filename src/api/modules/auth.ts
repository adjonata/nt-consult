import type { LoginData } from "@/types";
import { api } from "../axios";
import { authMock } from "./mocks/auth.mock";

export const authApi = {
  login(data: LoginData) {
    authMock.login();
    return api.post("/login", data);
  },
};
