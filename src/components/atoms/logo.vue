<script setup lang="ts"></script>

<template>
  <div class="logo__wrapper" data-test="logo">
    <img src="/logo.png" alt="Logo.png" class="logo" data-test="logo-image" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  @apply w-[200px] lg:w-[290px];

  &__wrapper {
    @apply w-full flex items-center justify-center;
  }
}
</style>
