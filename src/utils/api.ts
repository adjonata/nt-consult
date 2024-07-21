import type { QueryParams } from "@/stores/query.store";
import type { Hotel } from "@/types/hotel";
import { differenceInDays } from "date-fns";
import { parseDate } from "./date";
import { stateOptions } from "./options";
import { getDistanceInKm, stateCoordinates } from "./states";

export function makeHotelsByQuery(data: QueryParams) {
  const originCoords = stateCoordinates[data.origin];
  const destinyCoords = stateCoordinates[data.destiny];
  const distanceInKm = getDistanceInKm(originCoords, destinyCoords);

  const duration = differenceInDays(
    parseDate(data.checkout_date),
    parseDate(data.checkin_date)
  );
  if (duration < 1) {
    return [];
  }

  const createHotels = (
    quantity: number,
    params: {
      pricePer100Km: number;
      pricePerStar: number;
      companyName: string;
    }
  ) =>
    Array.from({ length: quantity }, (_, index) => {
      const { companyName, pricePer100Km, pricePerStar } = params;
      const hotelStars = (index % quantity) + 1;

      // Preço da viagem
      const travelPrice = (distanceInKm / 100) * pricePer100Km;
      // Preço da hospedagem
      const hostPrice =
        hotelStars * pricePerStar * duration * data.number_of_guests;
      // Valor da viagem + valor da hospedagem
      const totalPrice = travelPrice + hostPrice;
      return {
        id: index + pricePer100Km + pricePerStar,
        checkin_date: data.checkin_date,
        checkout_date: data.checkout_date,
        duration,
        name: `Hotel ${companyName}`,
        number_of_bedrooms: data.number_of_bedrooms,
        number_of_guests: data.number_of_guests,
        host_price: hostPrice,
        travel_price: travelPrice,
        total_price: totalPrice,
        stars: hotelStars,
        state: stateOptions.find((v) => v.code === data.destiny)?.label || "",
      } as unknown as Hotel;
    });

  const hotelsRoses = createHotels(5, {
    companyName: "Roses",
    pricePer100Km: 50,
    pricePerStar: 50,
  });
  const hotelsMamonas = createHotels(5, {
    companyName: "Mamonas",
    pricePer100Km: 40,
    pricePerStar: 40,
  });
  const hotelsHendrix = createHotels(5, {
    companyName: "Hendrix",
    pricePer100Km: 60,
    pricePerStar: 70,
  });

  const allHotels = [...hotelsRoses, ...hotelsMamonas, ...hotelsHendrix];

  const sortHotels = allHotels.sort((a, b) => {
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
