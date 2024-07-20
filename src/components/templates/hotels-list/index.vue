<script setup lang="ts">
import QueryForm from "@/components/organisms/query/form.vue";
import HotelsList from "@/components/organisms/list/hotels.vue";
import Logo from "@/components/atoms/logo.vue";
</script>

<template>
  <div class="hotels-list">
    <Logo />
    <QueryForm />
    <HotelsList />
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
