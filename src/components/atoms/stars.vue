<script setup lang="ts">
import StarIcon from "@/assets/images/star.svg";

const props = defineProps<{
  length: number;
}>();
</script>

<template>
  <div class="stars" data-test="stars">
    <StarIcon
      v-for="star in length"
      :key="star"
      class="w-[24px]"
      data-test="stars-item"
    />
  </div>
</template>

<style lang="scss" scoped>
.stars {
  @apply w-full flex gap-1;
}
</style>
