<script setup lang="ts">
import { Button, Select, Spinner } from "@/components/atoms";
import HotelItem from "@/components/molecules/list/item.vue";
import {
  useQueryStore,
  type QuerySortBy,
  type QuerySortType,
} from "@/stores/query.store";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const queryStore = useQueryStore();
const { hotels, selectedHotelIds, isLoading, isChangingSort } =
  storeToRefs(queryStore);

const sortBy = ref<string>("stars");
const sortType = ref<string>("desc");

watch([sortBy, sortType], ([newSortBy, newSortType]) => {
  queryStore.handleChangeSort(
    newSortBy as QuerySortBy,
    newSortType as QuerySortType
  );
});
</script>

<template>
  <section class="hotels">
    <div
      class="hotels__head"
      v-if="isChangingSort ? true : !isLoading && hotels.length"
    >
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
    <div class="hotels__loading" v-if="isLoading || isChangingSort">
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
