import type { AxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";
import { api } from "../../axios";

export const mock = new MockAdapter(api, {
  delayResponse: 1000,
});

export function makeRequestData<T = any>(config: AxiosRequestConfig<any>) {
  return typeof config.data === "string"
    ? (JSON.parse(config.data) as T)
    : null;
}
