<script setup lang="ts">
import type { Hotel } from "@/types/hotel";

const props = defineProps<{
  hotel: Hotel;
  selected?: boolean;
}>();
const emit = defineEmits<{
  (e: "select"): void;
  (e: "unselect"): void;
}>();
</script>

<template>
  <button
    :class="['hotel-item', selected && 'selected']"
    @click="props.selected ? emit('unselect') : emit('select')"
    type="button"
    :title="selected ? 'Desmarcar' : 'Comparar preços'"
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
  </button>
</template>

<style lang="scss" scoped>
.hotel-item {
  @apply w-full flex flex-col gap-1 p-4 
  bg-white shadow-lg rounded-2xl cursor-pointer
  border-[3px] border-transparent hover:border-primary-light transition-colors;

  &.selected {
    @apply border-primary;
  }
}
</style>
