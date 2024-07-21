<script setup lang="ts">
export type TableColumn = {
  label: string;
  key: string;
};
const props = withDefaults(
  defineProps<{
    columns?: TableColumn[];
    items?: {
      name: string;
      infos: Record<string, string | number>;
    }[];
  }>(),
  {
    columns: () => [
      {
        key: "test1",
        label: "Teste 1",
      },
      {
        key: "test2",
        label: "Teste 2",
      },
      {
        key: "test3",
        label: "Teste 3",
      },
    ],
    items: () =>
      Array.from({ length: 30 }, (_, index) => ({
        name: `Hotel ${index}`,
        infos: { test1: "1222", test2: "1223", test3: "1224" },
      })),
  }
);
</script>

<template>
  <div class="table">
    <div class="table__columns">
      <span v-for="column in columns" :key="column.key">
        {{ column.label }}
      </span>
    </div>
    <div class="table__content">
      <div class="table__content__item" v-for="item in items">
        <span class="table__content__item__name">
          {{ item.name }}
        </span>
        <span class="table__content__item__list">
          <span v-for="column in columns" :key="column.key">
            <slot :name="`col-${column.key}`" :item="item">
              {{ item.infos[column.key] }}
            </slot>
          </span>
        </span>
        <div
          class="table__content__item__actions"
          v-if="$slots['item-actions']"
        >
          <slot name="actions-item" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  @apply w-full grid grid-cols-12 gap-3 lg:gap-6 py-2;
  &__columns {
    @apply col-span-4 md:col-span-3 lg:col-span-2 flex flex-col gap-6 pt-[50px] px-2 border-r border-r-slate-300;

    span {
      @apply font-semibold text-gray-600 uppercase text-lg leading-5 h-[30px];
    }
  }
  &__content {
    @apply col-span-8 md:col-span-9 lg:col-span-10 w-full overflow-x-auto px-6
    flex gap-2 flex-nowrap;
    &__item {
      @apply flex flex-col min-w-[120px];
      &__name {
        @apply pb-6 text-xl font-bold text-primary;
      }
      &__list {
        @apply flex flex-col gap-6;
        span {
          @apply h-[30px] leading-5 text-lg text-gray-600;
        }
      }
    }
  }
}
</style>
