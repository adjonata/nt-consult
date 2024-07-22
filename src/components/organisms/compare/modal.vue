<script setup lang="ts">
import { Modal, Table, Stars, Button } from "@/components/atoms";
import type { TableItem } from "@/components/atoms/table.vue";
import { useQueryStore } from "@/stores/query.store";
import type { Hotel } from "@/types/hotel";
import { formatDate } from "@/utils/date";
import { applyMoneyMask } from "@/utils/masks";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { tableColumns } from "./utils";

const queryStore = useQueryStore();
const { selectedHotels, showComparation, hotelToContract, showContractModal } =
  storeToRefs(queryStore);

const selectedHotelsItems = computed<TableItem[]>(() =>
  selectedHotels.value?.map((hotel) => ({
    name: hotel.name,
    infos: hotel,
  }))
);

const hostDates = computed(() => {
  const firstHotel = selectedHotels.value[0];
  if (firstHotel) {
    return `${formatDate(String(firstHotel.checkin_date))} à ${formatDate(
      String(firstHotel.checkout_date)
    )}`;
  }
});

function handleContractHotel(hotel: Hotel) {
  hotelToContract.value = hotel;
  showComparation.value = false;
  showContractModal.value = true;
}
</script>

<template>
  <Modal v-model="showComparation" :title="`Comparar Preços - ${hostDates}`">
    <Table :columns="tableColumns" :items="selectedHotelsItems">
      <template #col-duration="{ item }">
        {{ item.infos.duration }} dia(s)
      </template>
      <template #col-number_of_guests="{ item }">
        {{ item.infos.number_of_guests }} hóspede(s)
      </template>
      <template #col-number_of_bedrooms="{ item }">
        {{ item.infos.number_of_bedrooms }} quarto(s)
      </template>
      <template #col-travel_price="{ item }">
        <span class="font-semibold">
          {{ applyMoneyMask(Number(item.infos.travel_price)) }}
        </span>
      </template>
      <template #col-host_price="{ item }">
        <span class="font-semibold">
          {{ applyMoneyMask(Number(item.infos.host_price)) }}
        </span>
      </template>
      <template #col-total_price="{ item }">
        <span class="font-semibold text-emerald-600">
          {{ applyMoneyMask(Number(item.infos.total_price)) }}
        </span>
      </template>
      <template #col-stars="{ item }">
        <Stars :length="Number(item.infos.stars)" />
      </template>

      <template #actions-item="{ item }">
        <Button
          label="Contratar"
          fullwidth
          theme="primary"
          class="mt-4 !h-[44px]"
          @click="handleContractHotel(item.infos as unknown as Hotel)"
        />
      </template>
    </Table>
  </Modal>
</template>

<style lang="scss" scoped></style>
