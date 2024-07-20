<script setup lang="ts"></script>

<template>
  <main class="main-layout">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.main-layout {
  @apply container mx-auto max-w-[1280px] px-4 lg:px-6 xl:px-0;
}
</style>
