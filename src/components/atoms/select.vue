<script setup lang="ts">
import VueSelect from "vue-select";
import Label from "./label.vue";
import type { Option } from "@/types";

const props = withDefaults(
  defineProps<{
    label: string;
    name: string;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {}
);

const value = defineModel();
</script>

<template>
  <Label :label :for="name">
    <VueSelect
      v-model="value"
      :name
      :options
      :placeholder
      :disabled
      :reduce="(option: Option) => option.code"
      data-test="select"
    />
  </Label>
</template>

<style lang="scss">
.vs__dropdown-toggle {
  @apply h-[44px] pb-0 border border-[rgb(221,221,221)] focus:border-[rgb(170,174,183)] hover:border-[rgb(170,174,183)];
}
.vs__selected {
  @apply h-[44px] my-0;
}
</style>
