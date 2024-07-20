<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    type?: "button" | "submit";
    theme?: "primary" | "secondary";
    disabled?: boolean;
    fullwidth?: boolean;
    rounded?: boolean;
  }>(),
  {
    type: "button",
    theme: "primary",
  }
);
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="[
      'button',
      theme,
      disabled && 'disabled',
      fullwidth && 'w-full',
      rounded ? 'rounded-full' : 'rounded-xl',
    ]"
    :disabled
    :type
    data-test="button"
    @click="disabled ? null : emit('click')"
  >
    <span class="button__label" data-test="button-label">
      {{ label }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply min-w-[142px] px-6 h-[60px] flex items-center justify-center text-center transition-colors;

  &.disabled {
    @apply cursor-not-allowed;
  }

  &.primary {
    &:not(.disabled) {
      @apply bg-primary hover:bg-primary-dark;
    }
    &.disabled {
      @apply bg-primary-light;
    }
  }
  &.secondary {
    &:not(.disabled) {
      @apply bg-secondary hover:bg-secondary-dark;
    }
    &.disabled {
      @apply bg-secondary-light;
    }
  }

  &__label {
    @apply text-white font-bold text-[16px];
  }
}
</style>
