<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { Label } from ".";

const props = withDefaults(
  defineProps<{
    label: string;
    name: string;
    disabled?: boolean;
    error?: string;
  }>(),
  {}
);

const value = defineModel<string>();

function handleChangeValue(event: string | null) {
  if (typeof event !== "string") {
    value.value = undefined;
  } else {
    value.value = event;
  }
}
</script>

<template>
  <Label :label :for="name" :error>
    <VueDatePicker
      :model-value="value"
      @update:model-value="handleChangeValue"
      text-input
      auto-apply
      format="dd/MM/yyyy"
      model-type="yyyy-MM-dd"
      :name
      placeholder="dd/mm/aaaa"
      :disabled
      :id="name"
    />
  </Label>
</template>

<style lang="scss">
.dp__input {
  @apply h-[44px];
}
</style>
