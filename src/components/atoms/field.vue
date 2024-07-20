<script setup lang="ts">
import { Label } from ".";

const props = withDefaults(
  defineProps<{
    label: string;
    name: string;
    placeholder?: string;
    type?: "text" | "password";
  }>(),
  {
    type: "text",
  }
);

const value = defineModel();
</script>

<template>
  <Label :label :for="name">
    <input
      v-model="value"
      :type
      :placeholder
      :name
      :id="name"
      class="field"
      data-test="field"
    />
  </Label>
</template>

<style lang="scss" scoped>
.field {
  @apply w-full outline-none px-3 h-[44px] rounded-[4px] relative
    border border-[rgb(221,221,221)] focus:border-[rgb(170,174,183)] hover:border-[rgb(170,174,183)];
}
</style>
