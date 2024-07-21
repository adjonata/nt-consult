<script setup lang="ts">
import { Modal } from "@/components/atoms";
import Logo from "@/components/atoms/logo.vue";
import HotelsList from "@/components/organisms/list/hotels.vue";
import QueryForm from "@/components/organisms/query/form.vue";
</script>

<template>
  <div class="hotels-list">
    <Logo />
    <QueryForm />
    <HotelsList />
    <Modal title="Comparar preços" />
  </div>
</template>

<style lang="scss" scoped>
.hotels-list {
  @apply w-full flex flex-col py-14;

  &__title {
    @apply w-full text-center text-3xl pb-3 text-secondary-dark uppercase;
  }
}
</style>
