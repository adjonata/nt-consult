<script setup lang="ts">
export type TableColumn = {
  label: string;
  key: string;
};
export type TableItem = {
  name: string;
  infos: Record<string, string | number>;
};
const props = withDefaults(
  defineProps<{
    columns: TableColumn[];
    items: TableItem[];
  }>(),
  {}
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
              <span v-html="item.infos[column.key]"></span>
            </slot>
          </span>
        </span>
        <div
          class="table__content__item__actions"
          v-if="$slots['actions-item']"
        >
          <slot name="actions-item" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  @apply w-full grid grid-cols-12;
  &__columns {
    @apply col-span-4 md:col-span-3 lg:col-span-2 flex flex-col gap-6 pt-[66px] pb-4 px-2 border-r border-r-slate-300;

    span {
      @apply font-semibold text-gray-500 uppercase text-[14px] leading-5 h-[33px] flex items-center;
    }
  }
  &__content {
    @apply col-span-8 md:col-span-9 lg:col-span-10 w-full overflow-x-auto px-4 lg:px-6 pb-4
    flex gap-4 lg:gap-6 flex-nowrap;
    &__item {
      @apply flex flex-col min-w-[220px] border border-gray-200 p-4 rounded-lg;
      &__name {
        @apply pb-6 text-xl font-bold text-primary;
      }
      &__list {
        @apply flex flex-col gap-6;
        span {
          @apply h-[33px] leading-5 text-[16px] text-gray-600 flex items-center;
        }
      }
    }
  }
}
</style>
