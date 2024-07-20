<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { Label } from ".";

const props = withDefaults(
  defineProps<{ label: string; name: string; disabled?: boolean }>(),
  {}
);

const value = defineModel<string>();
</script>

<template>
  <Label :label :for="name">
    <VueDatePicker
      v-model="value"
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
