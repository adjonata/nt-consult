import type { QueryFields } from "@/validations/query";
import { makeRequestData, mock } from "./mock";
import { makeHotelsByQuery } from "@/utils/api";
import type { QueryParams } from "@/stores/query.store";

export const hotelsMock = {
  // Mock for list hotels
  list: () => {
    mock.onGet("/hotels").reply((config) => {
      console.log(config);
      const data = makeRequestData<QueryParams>(config, "params");
      return [200, makeHotelsByQuery(data)];
    });
  },
};
