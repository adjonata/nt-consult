<script setup lang="ts"></script>

<template>
  <main class="main-layout">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.main-layout {
  @apply container mx-auto max-w-[1280px];
}
</style>
