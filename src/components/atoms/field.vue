<script setup lang="ts">
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
  <div class="field">
    <label :for="name" class="field__label">{{ label }}</label>
    <input
      v-model="value"
      :type
      :placeholder
      :name
      :id="name"
      class="field__input"
    />
  </div>
</template>

<style lang="scss" scoped>
.field {
  @apply flex flex-col gap-1 text-gray-700;
  &__label {
    @apply cursor-default font-semibold;
  }
  &__input {
    @apply w-full outline-none px-3 py-2 rounded-lg relative
    border border-gray-400 hover:border-gray-600 focus:border-gray-800;
  }
}
</style>
