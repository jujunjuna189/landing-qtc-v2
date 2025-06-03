<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50" :class="{ 'opacity-100': isShow, 'opacity-0 pointer-events-none': !isShow }">
    <svg
      class="animate-spin h-12 w-12 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


const isShow = ref(true);
const element = ref<boolean>(false);

const props = defineProps<{
  loader: boolean
}>();

watch(() => props.loader, (newVal) => {
  if (newVal === false) {
    setTimeout(() => {
      isShow.value = false;
    }, 1000);

    setTimeout(() => {
      element.value = true;
    }, 800);

    setTimeout(() => {
      element.value = false;
    }, 2200);
  }
});
</script>
