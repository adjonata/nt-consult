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
    error?: string;
    valueType?: "string" | "number";
  }>(),
  { valueType: "string" }
);

const value = defineModel<string | number>();

function handleChangeValue(event: string | null) {
  if (typeof event !== "string") {
    value.value = undefined;
  } else {
    if (props.valueType === "number") {
      value.value = Number(event);
    } else {
      value.value = event;
    }
  }
}
</script>

<template>
  <Label :label :for="name" :error>
    <VueSelect
      :modelValue="value"
      @update:modelValue="handleChangeValue"
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
