<script setup lang="ts">
import type { Option } from "@/types";
import VueSelect from "vue-select";
import Label from "./label.vue";

const props = withDefaults(
  defineProps<{
    label: string;
    name: string;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    valueType?: "string" | "number";
    clearable?: boolean;
  }>(),
  { valueType: "string", clearable: true }
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
      :clearable
      :reduce="(option: Option) => option.code"
      data-test="select"
    />
  </Label>
</template>

<style lang="scss">
.v-select {
  @apply bg-white;
}
.vs__dropdown-toggle {
  @apply h-[44px] pb-0 border border-[rgb(221,221,221)] focus:border-[rgb(170,174,183)] hover:border-[rgb(170,174,183)];
}
.vs__selected {
  @apply h-[44px] my-0;
}
</style>
