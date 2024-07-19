<script setup lang="ts">
import { DatePicker } from "@/components/atoms";
import { ref } from "vue";
const value = ref("");
</script>

<template>
  <DatePicker v-model="value" label="Data destino" name="end_date" />
</template>

<style lang="scss" scoped></style>
