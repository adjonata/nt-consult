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
    <input v-model="value" :type :placeholder :name :id="name" class="field" />
  </Label>
</template>

<style lang="scss" scoped>
.field {
  @apply w-full outline-none px-3 py-2 rounded-lg relative
    border border-gray-400 hover:border-gray-600 focus:border-gray-800;
}
</style>
