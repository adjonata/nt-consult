<script setup lang="ts">
import QueryForm from "@/components/organisms/query/form.vue";
</script>

<template>
  <div class="hotels-list">
    <h1 class="hotels-list__title">Encontre hóteis baratos!</h1>
    <QueryForm />
  </div>
</template>

<style lang="scss" scoped>
.hotels-list {
  @apply w-full flex flex-col gap-10 pt-8;

  &__title {
    @apply w-full text-center text-3xl pb-3 text-secondary-dark uppercase;
  }
}
</style>
