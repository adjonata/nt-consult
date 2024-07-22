import { hotelsApi } from "@/api/modules/hotels";
import type { Hotel } from "@/types/hotel";
import { delay } from "@/utils/delay";
import { checkNotificationPermission, sendNotification } from "@/utils/notify";
import { randomNumber } from "@/utils/random";
import type { ContractFields } from "@/validations/contract";
import type { QueryFields } from "@/validations/query";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export type QuerySortBy = "stars" | "total_price";
export type QuerySortType = "asc" | "desc";

export interface QueryParams extends QueryFields {
  sortBy: QuerySortBy;
  sortType: QuerySortType;
}

export const useQueryStore = defineStore("query", () => {
  const sortBy = ref<QuerySortBy>("stars");
  const sortType = ref<QuerySortType>("desc");

  const hotels = ref<Hotel[]>([]);
  const selectedHotels = ref<Hotel[]>([]);

  const selectedHotelIds = computed(() =>
    selectedHotels.value.map((hotel) => hotel.id)
  );

  const lastQueryFields = ref<QueryFields>();

  const isLoading = ref(false);
  const isChangingSort = ref(false);
  const isAlreadySearched = ref(false);

  // Busca hotéis usando requisição mock
  async function handleSearchHotels(
    data: QueryFields,
    _changingSort?: boolean
  ) {
    try {
      if (_changingSort) {
        isChangingSort.value = true;
      }
      isLoading.value = true;
      hotels.value = [];
      selectedHotels.value = [];
      lastQueryFields.value = data;
      const response = await hotelsApi.list({
        ...data,
        sortBy: sortBy.value,
        sortType: sortType.value,
      });
      hotels.value = response.data;
      isAlreadySearched.value = true;
    } catch (error) {
      // #TODO
    } finally {
      isLoading.value = false;
      isChangingSort.value = false;
    }
  }

  // Manda a última query mudando os parâmetros de ordenação
  async function handleChangeSort(
    _sortBy: QuerySortBy,
    _sortType: QuerySortType
  ) {
    sortBy.value = _sortBy;
    sortType.value = _sortType;

    if (lastQueryFields.value) {
      await handleSearchHotels(lastQueryFields.value, true);
    }
  }
  watch([sortBy, sortType], ([newSortBy, newSortType]) => {
    handleChangeSort(newSortBy, newSortType);
  });

  function handleSelectHotel(hotel: Hotel) {
    selectedHotels.value.push(hotel);
  }
  function handleUnselectHotel(hotelId: number) {
    selectedHotels.value = selectedHotels.value.filter(
      (hotel) => hotel.id !== hotelId
    );
  }

  function handleUnselectAllHotels() {
    selectedHotels.value = [];
  }

  const showComparation = ref(false);
  watch(
    () => showComparation.value,
    (show) => {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = show ? "hidden" : "auto";
      }
    }
  );

  const hotelToContract = ref<Hotel>();
  const showContractModal = ref(false);

  // Contrata o hotél selecionado
  async function handleContract(data: ContractFields) {
    const canSentNotification = await checkNotificationPermission();
    if (!canSentNotification) {
      window.alert("Para continuar, permita as notificações!");
      return;
    }

    await sendNotification("Proposta de reserva enviada!");

    selectedHotels.value = [];
    showComparation.value = false;
    showContractModal.value = false;

    await delay(randomNumber(3000, 6000));
    await sendNotification("Proposta em análise!");
    await delay(randomNumber(3000, 6000));
    const approved = randomNumber(0, 100) < 50 ? true : false;
    await sendNotification(
      `Reversa ${
        approved
          ? "aceita, entraremos em contato!"
          : "não aceita, tente novamente!"
      }`
    );
  }

  return {
    sortBy,
    sortType,
    hotels,
    handleChangeSort,
    handleSearchHotels,
    isLoading,
    isChangingSort,
    isAlreadySearched,
    handleSelectHotel,
    handleUnselectHotel,
    handleUnselectAllHotels,
    selectedHotels,
    selectedHotelIds,
    showComparation,
    hotelToContract,
    showContractModal,
    handleContract,
  };
});
