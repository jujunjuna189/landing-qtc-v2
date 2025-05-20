<template>
  <div class="leading-3 w-full relative" ref="reff">
    <div
      class="border border-primary-dark px-3 py-[13.5px] w-full focus:outline-none flex justify-between cursor-pointer"
      :class="[!modelValue && 'text-slate-400', props.class_cs]"
      @click="onShow"
    >
      <span>{{ modelValue?.title ?? placeholder }}</span>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </div>
    </div>

    <div
      class="absolute w-full border rounded-lg overflow-hidden mt-1 z-40 bg-white-light"
      :class="{ hidden: !isShow }"
    >
      <div v-if="data?.length === 0" class="p-3">
        <span>Waiting...</span>
      </div>
      <div
        v-for="(item, index) in data"
        :key="index"
        class="p-3 hover:bg-slate-200 cursor-pointer flex justify-start"
        :title="item.title"
        @click="onChange(item)"
      >
        <span class="whitespace-pre">{{ item.title }}</span>
      </div>
    </div>

    <small v-if="error" class="text-red-800 pl-1">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps<{
  data: Array<{ title: string; value?: any }>,
  placeholder?: string,
  error?: string,
  modelValue: any,
  class_cs?: string,
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>();

const reff = ref<HTMLElement | null>(null);
const isShow = ref(false);

const onShow = () => {
  isShow.value = !isShow.value;
};

const onChange = (value: any) => {
  isShow.value = false;
  emit('update:modelValue', value);
};

const handleClickOutside = (event: MouseEvent) => {
  if (reff.value && !reff.value.contains(event.target as Node)) {
    isShow.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
