<script setup lang="ts">
import { Table } from "@/components/atoms";
import { onClickOutside, onKeyDown } from "@vueuse/core";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "large" | "medium";
    title: string;
  }>(),
  {
    size: "large",
  }
);
const show = defineModel<boolean>({
  default: true,
});

const contentRef = ref<HTMLDivElement>();
onClickOutside(contentRef, () => {
  show.value = false;
});
onKeyDown("Escape", () => {
  show.value = false;
});
</script>

<template>
  <aside :class="['modal', size]" v-if="show">
    <div class="modal__content" ref="contentRef">
      <div class="modal__content__head">
        <span class="modal__content__head__title">{{ title }}</span>
        <button class="modal__content__head__close" @click="show = false">
          x
        </button>
      </div>
      <slot>
        <Table />
      </slot>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.modal {
  @apply fixed z-[100] left-0 top-0 flex items-center justify-center w-full px-4 h-full bg-[rgba(0,0,0,0.3)] cursor-pointer animate-fade;

  &__content {
    @apply max-w-full min-h-[300px] bg-white p-3 lg:p-6 rounded-xl cursor-default flex flex-col;

    &__head {
      @apply w-full flex items-center justify-between mb-4;

      &__title {
        @apply text-primary font-semibold text-lg lg:text-xl uppercase lg:tracking-wide;
      }
      &__close {
        @apply text-red-600 w-12 h-12 flex items-center justify-center rounded-xl text-2xl font-bold;
      }
    }
  }
  &.medium {
    .modal__content {
      @apply w-[800px];
    }
  }
  &.large {
    .modal__content {
      @apply w-[1100px];
    }
  }
}
</style>
