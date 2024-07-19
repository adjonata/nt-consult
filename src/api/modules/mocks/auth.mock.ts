import type { LoginData } from "@/types";
import { makeRequestData, mock } from "./mock";

export const authMock = {
  // Mock for login request
  login: () => {
    mock.onPost("/login").reply((config) => {
      const data = makeRequestData<LoginData>(config);
      if (!data) return [400];

      const { username, password } = data;
      if (username === "admin" && password === "admin") {
        return [200, { id: 1, username }];
      }

      return [400];
    });
  },
};
