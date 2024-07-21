<script setup lang="ts">
import StarIcon from "@/assets/images/star.svg";
import type { Hotel } from "@/types/hotel";
import { formatDate } from "@/utils/date";
import { applyMoneyMask } from "@/utils/masks";
import { computed } from "vue";

const props = defineProps<{
  hotel: Hotel;
  selected?: boolean;
}>();
const emit = defineEmits<{
  (e: "select"): void;
  (e: "unselect"): void;
}>();
/**
 * Nome do hotel
 * - Datas
 * - Dias de hospedagem - Destino
 * - Quartos - Hóspedes
 * - Estrelas
 * - Valor total
 */

const hostDaysLabel = computed(() => {
  const hostDays = Number(props.hotel.duration);
  return `${hostDays} dia${hostDays > 1 ? "s" : ""}`;
});

const starsArray = computed(() =>
  Array.from({ length: props.hotel.stars }, (_, index) => index + 1)
);
const hotelPrice = computed(() => {
  return applyMoneyMask(props.hotel.total_price);
});
const dates = computed(() => {
  const formatedCheckinDate = formatDate(props.hotel.checkin_date);
  const formatedCheckoutDate = formatDate(props.hotel.checkout_date);

  return `${formatedCheckinDate} à ${formatedCheckoutDate}`;
});
</script>

<template>
  <button
    :class="['hotel-item', selected && 'selected']"
    @click="props.selected ? emit('unselect') : emit('select')"
    type="button"
    :title="selected ? 'Desmarcar' : 'Comparar preços'"
  >
    <span class="hotel-item__title">
      {{ hotel.name }}
    </span>
    <span class="hotel-item__info"> <b>De:</b> {{ dates }} </span>

    <span class="hotel-item__info"> <b>Destino:</b> {{ hotel.state }} </span>

    <span class="hotel-item__info">
      <b>Dias hospedado:</b> {{ hostDaysLabel }}
    </span>

    <div class="hotel-item__group">
      <span class="hotel-item__info">
        <b>Quartos:</b> {{ hotel.number_of_bedrooms }}
      </span>
      <span class="hotel-item__info">
        <b>Hóspedes:</b> {{ hotel.number_of_guests }}
      </span>
    </div>
    <div class="hotel-item__stars">
      <StarIcon v-for="stars in starsArray" class="w-[24px]" />
    </div>
    <span class="hotel-item__price">
      {{ hotelPrice }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
.hotel-item {
  @apply w-full flex flex-col gap-2 p-4 
  bg-white shadow-lg rounded-2xl cursor-pointer
  border-[3px] border-transparent hover:border-primary-light transition-colors
  text-gray-800 text-left;

  &.selected {
    @apply border-primary;
  }

  &__title {
    @apply font-bold text-xl;
  }
  &__group {
    @apply grid grid-cols-2 gap-3;
  }
  &__info {
    @apply text-base;
    b {
      @apply font-semibold;
    }
  }
  &__stars {
    @apply w-full flex gap-1;
  }
  &__price {
    @apply font-bold text-2xl text-primary;
  }
}
</style>
