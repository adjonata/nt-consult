<script setup lang="ts">
import HotelItem from "@/components/molecules/list/item.vue";
import { Spinner } from "@/components/atoms";
import { useQueryStore } from "@/stores/query.store";
import { storeToRefs } from "pinia";
import { Button } from "@/components/atoms";

const queryStore = useQueryStore();
const { hotels, selectedHotelIds, isLoading } = storeToRefs(queryStore);
</script>

<template>
  <section class="hotels">
    <div class="hotels__title" v-if="!isLoading && hotels.length">
      <span>Selecione hotéis para comparar:</span>
    </div>
    <div class="hotels__list" v-if="!isLoading">
      <HotelItem
        v-for="hotel in hotels"
        :key="hotel.id"
        :hotel
        :selected="selectedHotelIds.includes(hotel.id)"
        @select="queryStore.handleSelectHotel(hotel)"
        @unselect="queryStore.handleUnselectHotel(hotel.id)"
      />
    </div>
    <div class="hotels__loading" v-if="isLoading">
      <Spinner :size="32" theme="primary" />
      <span>Buscando hotéis</span>
    </div>
    <div class="hotels__compare" v-if="selectedHotelIds.length">
      <Button type="button" label="Comparar" theme="primary" rounded />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hotels {
  @apply w-full flex flex-col;
  &__title {
    @apply w-full text-center flex items-center mb-4;
    span {
      @apply text-primary font-bold text-lg;
    }
  }
  &__list {
    @apply w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 pb-10 animate-fade;
  }
  &__loading {
    @apply flex items-center justify-center h-[100px] animate-fade;
    span {
      @apply text-primary text-lg uppercase pl-4;
    }
  }

  &__compare {
    button {
      @apply fixed right-[20px] lg:right-[100px] bottom-[30px] lg:bottom-[70px] shadow-2xl;
    }
  }
}
</style>
