<script setup lang="ts">
defineProps<{
  label: string;
  for?: string;
  error?: string;
}>();
</script>

<template>
  <div class="label" data-test="label">
    <label :for class="label__title" data-test="label-title">{{ label }}</label>
    <div class="label__content" data-test="label-content">
      <slot></slot>
    </div>
    <div class="label__error" v-if="error">
      <span data-test="label-error">{{ error }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.label {
  @apply flex flex-col gap-1 text-gray-700;
  &__title {
    @apply cursor-default font-semibold;
  }
  &__content {
    @apply w-full;
  }
  &__error {
    @apply w-full;
    span {
      @apply text-[14px] text-red-600 pl-2;
    }
  }
}
</style>
