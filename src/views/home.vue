<script setup lang="ts">
import { DatePicker, Select, Field } from "@/components/atoms";
import { ref } from "vue";
const value = ref("");
const selected = ref("");
</script>

<template>
  <DatePicker v-model="value" label="Data destino" name="end_date" />
  {{ selected }}
  <Select
    label="Testes"
    :options="[
      { code: 'a', label: 'bbbb' },
      { code: 'b', label: 'aaaa' },
    ]"
    name="teste"
    v-model="selected"
  />
  <Field label="test" name="sadsad" v-model="selected" />
</template>

<style lang="scss" scoped></style>
