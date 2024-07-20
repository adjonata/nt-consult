import type { Hotel } from "@/types/hotel";
import { api } from "../axios";
import { hotelsMock } from "./mocks/hotels.mock";
import type { QueryParams } from "@/stores/query.store";

export const hotelsApi = {
  list(data: QueryParams) {
    hotelsMock.list();
    return api.get<Hotel[]>("/hotels", {
      params: data,
    });
  },
};
