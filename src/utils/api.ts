import type { QueryFields } from "@/validations/query";
import { getDistanceInKm, stateCoordinates } from "./states";
import { differenceInDays } from "date-fns";
import { parseDate } from "./date";
import { stateOptions } from "./options";
import type { Hotel } from "@/types/hotel";
import type { QueryParams } from "@/stores/query.store";

export function makeHotelsByQuery(data: QueryParams) {
  const originCoords = stateCoordinates[data.origin];
  const destinyCoords = stateCoordinates[data.destiny];
  const distanceInKm = getDistanceInKm(originCoords, destinyCoords);

  const travelPrice = (distanceInKm / 100) * 40; // 40 reais por 100 KM viajado

  const duration = differenceInDays(
    parseDate(data.checkout_date),
    parseDate(data.checkin_date)
  );
  if (duration < 1) {
    return [];
  }

  const hotels = Array.from({ length: 10 }, (_, index) => {
    const hotelStars = (index % 10) + 1;
    const hostPrice = hotelStars * 20 * duration * data.number_of_guests; // 20 reais por estrela * dias hospedado
    const totalPrice = travelPrice + hostPrice; // Valor da viagem + valor da hospedagem
    return {
      id: index + 1,
      checkin_date: data.checkin_date,
      checkout_date: data.checkout_date,
      duration,
      name: `Hotel ${hotelStars} estrela${hotelStars > 1 ? "s" : ""}`,
      number_of_bedrooms: data.number_of_bedrooms,
      number_of_guests: data.number_of_guests,
      host_price: hostPrice,
      travel_price: travelPrice,
      total_price: totalPrice,
      stars: hotelStars,
      state: stateOptions.find((v) => v.code === data.destiny)?.label || "",
    } as unknown as Hotel;
  });

  const sortHotels = hotels.sort((a, b) => {
    const aValue = a[data.sortBy];
    const bValue = b[data.sortBy];
    if (data.sortType === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  return sortHotels;
}
