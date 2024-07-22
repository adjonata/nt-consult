<script setup lang="ts">
import Logo from "@/components/atoms/logo.vue";
import HotelsList from "@/components/organisms/list/hotels.vue";
import QueryForm from "@/components/organisms/query/form.vue";
import ComparationModal from "@/components/organisms/compare/modal.vue";
import ContractForm from "@/components/organisms/contract/form.vue";
</script>

<template>
  <section class="hotels-list">
    <Logo />
    <QueryForm />
    <HotelsList />
    <ComparationModal />
    <ContractForm />
  </section>
</template>

<style lang="scss" scoped>
.hotels-list {
  @apply w-full flex flex-col py-14;

  &__title {
    @apply w-full text-center text-3xl pb-3 text-secondary-dark uppercase;
  }
}
</style>
