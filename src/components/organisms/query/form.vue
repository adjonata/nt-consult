<script setup lang="ts">
import { Button, DatePicker, Select } from "@/components/atoms";
import { useQueryStore } from "@/stores/query.store";
import { makeNumberOptions, stateOptions } from "@/utils/options";
import { queryValidation, type QueryFields } from "@/validations/query";
import { toTypedSchema } from "@vee-validate/zod";
import { storeToRefs } from "pinia";
import { useForm } from "vee-validate";

const props = defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "submit", values: QueryFields): void;
}>();

const queryStore = useQueryStore();
const { isLoading } = storeToRefs(queryStore);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(queryValidation),
  initialValues: {
    number_of_bedrooms: 1,
    number_of_guests: 1,
  },
});

const [checkinDate] = defineField("checkin_date");
const [checkoutDate] = defineField("checkout_date");
const [origin] = defineField("origin");
const [destiny] = defineField("destiny");
const [numberOfBedrooms] = defineField("number_of_bedrooms");
const [numberOfGuests] = defineField("number_of_guests");

const bedroomsOptions = makeNumberOptions(10, "quarto");
const guestsOptions = makeNumberOptions(10, "hóspede");

function scrollToHotelsList() {
  const hotelsListElement = document.querySelector("#hotels-list");
  if (hotelsListElement) {
    hotelsListElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

const submit = handleSubmit(async (values) => {
  await queryStore.handleSearchHotels(values);
  scrollToHotelsList();
});
</script>

<template>
  <form novalidate @submit.prevent="submit" class="query-form">
    <Select
      label="Origem"
      name="origin"
      :options="stateOptions"
      :error="errors.origin"
      :disabled="isLoading"
      placeholder="Selecione uma origem"
      class="col-span-2 md:col-span-1 lg:col-span-3"
      v-model="origin"
    />
    <Select
      label="Destino"
      name="destiny"
      :options="stateOptions"
      :error="errors.destiny"
      :disabled="isLoading"
      placeholder="Selecione um destino"
      class="col-span-2 md:col-span-1 lg:col-span-3"
      v-model="destiny"
    />
    <DatePicker
      label="Data de Check-In"
      name="checkin_date"
      :error="errors.checkin_date"
      :disabled="isLoading"
      class="lg:col-span-3"
      :min-date="new Date()"
      v-model="checkinDate"
    />
    <DatePicker
      label="Data de Check-Out"
      name="checkout_date"
      :error="errors.checkout_date"
      :disabled="isLoading"
      class="lg:col-span-3"
      :min-date="new Date()"
      v-model="checkoutDate"
    />
    <Select
      label="N° de Quartos"
      name="number_of_bedroows"
      :options="bedroomsOptions"
      :error="errors.number_of_bedrooms"
      :disabled="isLoading"
      value-type="number"
      class="lg:col-span-3"
      placeholder="Selecione uma opção"
      v-model="numberOfBedrooms"
    />
    <Select
      label="N° de Hóspedes"
      name="number_of_guests"
      :options="guestsOptions"
      :error="errors.number_of_guests"
      value-type="number"
      :disabled="isLoading"
      class="lg:col-span-3"
      v-model="numberOfGuests"
    />
    <Button
      type="submit"
      theme="primary"
      fullwidth
      :label="isLoading ? 'Carregando...' : 'Procurar'"
      class="mt-2 col-span-2 lg:col-span-3"
    />
  </form>
</template>

<style lang="scss" scoped>
.query-form {
  @apply w-full grid grid-cols-2 lg:grid-cols-12 gap-x-3 lg:gap-x-6 gap-y-3 lg:gap-y-6 pb-8 pt-8 lg:pt-10;
}
</style>
