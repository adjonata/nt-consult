import type { AxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";
import { api } from "../../axios";

export const mock = new MockAdapter(api, {
  delayResponse: 1200,
});

export function makeRequestData<T = any>(
  config: AxiosRequestConfig<any>,
  key: "data" | "params"
) {
  return typeof config[key] === "string"
    ? (JSON.parse(config[key]) as T)
    : (config[key] as T);
}
