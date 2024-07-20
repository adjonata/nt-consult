<script setup lang="ts">
import { useQueryStore } from "@/stores/query.store";

const queryStore = useQueryStore();
</script>

<template>
  <div
    class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 pb-10"
  >
    <div
      class="w-full flex flex-col gap-1 p-4 border-2 border-gray-500 rounded-xl"
      v-for="hotel in queryStore.hotels"
      :key="hotel.id"
    >
      <span class="text-lg font-bold">{{ hotel.name }}</span>
      <span>De: {{ hotel.checkin_date }} à {{ hotel.checkout_date }}</span>
      <span>N° de Hóspedes: {{ hotel.number_of_guests }}</span>
      <span>N° de Quartos: {{ hotel.number_of_bedrooms }}</span>
      <span>Dias de Hospedagem: {{ hotel.duration }}</span>
      <span>Estrelas: {{ hotel.stars }}</span>
      <span>Destino: {{ hotel.state }}</span>
      <span>Preço de hospedagem: {{ hotel.host_price.toFixed(2) }}</span>
      <span>Preço de viagem: {{ hotel.travel_price.toFixed(2) }}</span>
      <span>Preço total: {{ hotel.total_price.toFixed(2) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
