<script setup lang="ts">
import { Modal } from "@/components/atoms";
import { useQueryStore } from "@/stores/query.store";
import { storeToRefs } from "pinia";
import ContractDetails from "./details.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { contractValidation } from "@/validations/contract";
import { Button, Field, Select } from "@/components/atoms";

const queryStore = useQueryStore();
const { hotelToContract, showContractModal } = storeToRefs(queryStore);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(contractValidation),
});

const [fullname] = defineField("fullname");
const [email] = defineField("email");
const [paymentMethod] = defineField("payment_method");

const submit = handleSubmit(async (values) => {
  await queryStore.handleContract();
});
</script>

<template>
  <Modal
    title="Contratar plano"
    v-model="showContractModal"
    size="medium"
    v-if="hotelToContract"
  >
    <div class="contract-form">
      <ContractDetails
        :hotel="hotelToContract"
        class="col-span-1 md:col-span-3 lg:col-span-3"
      />
      <div class="hidden md:block md:col-span-1 lg:col-span-1"></div>
      <form
        @submit.prevent="submit"
        class="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col gap-5"
      >
        <Field
          name="fullname"
          :error="errors.fullname"
          v-model="fullname"
          label="Nome completo"
          placeholder="Preencha com o seu nome"
        />
        <Field
          name="email"
          :error="errors.email"
          v-model="email"
          label="E-mail"
          placeholder="Preencha com o seu e-mail"
        />
        <Select
          name="payment_method"
          :error="errors.payment_method"
          label="Método de pagamento"
          placeholder="Selecione uma opção"
          :options="[
            {
              code: 'ticket',
              label: 'Boleto',
            },
            {
              code: 'credit_card',
              label: 'Cartão de crédito',
            },
            {
              code: 'pix',
              label: 'Pix',
            },
          ]"
          v-model="paymentMethod"
        />
        <Button type="submit" label="Contratar" class="!h-[44px] mt-2" />
      </form>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.contract-form {
  @apply grid grid-cols-1 md:grid-cols-8 gap-4 lg:gap-6 p-2;
}
</style>
