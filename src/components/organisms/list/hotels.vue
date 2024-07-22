<script setup lang="ts">
import { Button, Select, Spinner } from "@/components/atoms";
import HotelItem from "@/components/molecules/list/item.vue";
import { useQueryStore } from "@/stores/query.store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const queryStore = useQueryStore();
const {
  hotels,
  selectedHotelIds,
  isLoading,
  isChangingSort,
  isAlreadySearched,
  sortBy,
  sortType,
  showComparation,
} = storeToRefs(queryStore);

const showFilters = computed(() =>
  isChangingSort.value ? true : !isLoading.value && hotels.value.length
);
const showSpinner = computed(() => isLoading.value || isChangingSort.value);
const showActionButtons = computed(() => !!selectedHotelIds.value.length);
const showEmptyFeedback = computed(
  () =>
    !isLoading.value &&
    !isChangingSort.value &&
    isAlreadySearched.value &&
    !hotels.value.length
);
</script>

<template>
  <section class="hotels" id="hotels-list">
    <div class="hotels__head" v-if="showFilters">
      <div class="hotels__head__title flex">
        <span>Selecione hotéis para comparar:</span>
      </div>
      <div class="hotels__head__filters">
        <Select
          label="Filtrar por:"
          :options="[
            { code: 'stars', label: 'Estrelas' },
            { code: 'total_price', label: 'Preço' },
          ]"
          name="sort_by"
          class="w-[170px] lg:w-[190px]"
          :clearable="false"
          v-model="sortBy"
        />
        <Select
          label="Ordem:"
          :options="[
            { code: 'desc', label: 'Decrescente' },
            { code: 'asc', label: 'Crescente' },
          ]"
          name="sort_type"
          class="w-[170px] lg:w-[190px]"
          :clearable="false"
          v-model="sortType"
        />
      </div>
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
    <div class="hotels__loading" v-if="showSpinner">
      <Spinner :size="32" theme="primary" />
      <span>Buscando hotéis</span>
    </div>
    <div class="hotels__empty" v-if="showEmptyFeedback">
      <span>Nenhum hotel encontrado</span>
    </div>
    <div class="hotels__compare" v-if="showActionButtons">
      <Button
        type="button"
        label="Limpar"
        theme="secondary"
        rounded
        @click="queryStore.handleUnselectAllHotels()"
      />
      <Button
        type="button"
        :label="`Comparar (${selectedHotelIds.length})`"
        theme="primary"
        rounded
        @click="showComparation = true"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hotels {
  @apply w-full flex flex-col pt-4 lg:pt-8;
  &__head {
    @apply flex flex-col  lg:flex-row gap-4 lg:gap-0 items-start lg:items-end justify-start lg:justify-between pb-6;
    &__title {
      @apply w-full text-center flex items-center;
      span {
        @apply text-primary font-bold text-lg;
      }
    }
    &__filters {
      @apply flex gap-4;
    }
  }
  &__list {
    @apply w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 pb-8 animate-fade;
  }

  &__loading,
  &__empty {
    @apply flex items-center justify-center animate-fade h-[60px];
    span {
      @apply text-primary text-lg uppercase pl-4;
    }
  }

  &__compare {
    @apply fixed right-[20px] lg:right-[100px] bottom-[30px] lg:bottom-[70px] flex flex-col gap-5;
    button {
      @apply shadow-2xl;
    }
  }
}
</style>
