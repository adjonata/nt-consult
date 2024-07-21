<script setup lang="ts">
const props = withDefaults(
  defineProps<{ theme?: "white" | "primary"; size?: number }>(),
  {
    theme: "white",
    size: 16,
  }
);
const borderTopColor = (
  {
    white: "#fff",
    primary: "#3555b0",
  } as Record<string, string>
)[props.theme];
</script>
<template>
  <span
    :class="['loader', theme]"
    :style="{
      borderTopColor,
      width: `${size}px`,
      height: `${size}px`,
    }"
    data-test="loader"
  ></span>
</template>
<style scoped>
.loader {
  border-radius: 50%;
  display: inline-block;
  border-right: 2px solid transparent;
  border-top: solid;
  border-top-width: 2px;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
