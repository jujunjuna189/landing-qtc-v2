<template>
  <!-- Logo utama -->
  <div
    class="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-white-light z-40 transition-opacity duration-300"
    :class="{ 'opacity-100': isShow, 'opacity-0 pointer-events-none': !isShow }"
  >
    <img
      :src="asset.lgLogo"
      alt="QTC Logo"
      class="w-44 lg:w-72 transform transition-transform duration-300"
      :class="{ 'translate-x-0': isShow, '-translate-x-24': !isShow }"
    />
  </div>

  <!-- Sliding shapes -->
  <div v-if="element" class="fixed top-0 bottom-0 left-0 right-0 z-30 bg-white-light overflow-hidden items-center justify-center hidden lg:flex">
    <div>
      <svg width="2822" class="animate-slide-1" height="1284" viewBox="0 0 2822 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M207.499 0H2821.27C2821.27 0 2728.2 227.221 2647 496.547C2542.5 843.136 2821.27 1284 2821.27 1284H207.499C207.499 1284 -40.9801 807.175 6.00019 496.547C36.2681 296.419 207.499 0 207.499 0Z" fill="#486281" />
      </svg>
    </div>
    <div>
      <svg width="2822" class="animate-slide-2" height="1284" viewBox="0 0 2822 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M207.499 0H2821.27C2821.27 0 2728.2 227.221 2647 496.547C2542.5 843.136 2821.27 1284 2821.27 1284H207.499C207.499 1284 -40.9801 807.175 6.00019 496.547C36.2681 296.419 207.499 0 207.499 0Z" fill="#EDA241" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import asset from '../../../assets/assets';

const props = defineProps<{
  isLoader: boolean
}>();

const isShow = ref(true);
const element = ref<boolean>(false);

watch(() => props.isLoader, (newVal) => {
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