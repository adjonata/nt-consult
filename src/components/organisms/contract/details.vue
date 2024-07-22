<script setup lang="ts">
import { Stars } from "@/components/atoms";
import type { Hotel } from "@/types/hotel";
import { applyMoneyMask } from "@/utils/masks";

const props = defineProps<{
  hotel: Hotel;
}>();
</script>

<template>
  <div class="contract-details">
    <h3 class="contract-details__title">
      {{ hotel.name }}
    </h3>
    <span><b>Dias de hospedagem:</b> {{ hotel.duration }} dias</span>
    <span><b>Estrelas:</b> <Stars :length="hotel.stars" /></span>
    <span><b>Hóspede:</b> 1 hóspede(s)</span>
    <span><b>Quartos:</b> 1 quarto(s)</span>
    <span><b>Valor total:</b> {{ applyMoneyMask(hotel.total_price) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.contract-details {
  @apply flex flex-col gap-4 text-gray-500;
  &__title {
    @apply text-lg text-primary font-bold;
  }
}
</style>
