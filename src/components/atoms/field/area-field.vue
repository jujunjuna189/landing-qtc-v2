<template>
    <textarea :name="id" :id="id" class="border border-primary-dark px-3 py-2 w-full focus:outline-none" :class="class_cs" autocomplete="false" :placeholder="placeholder" rows="10" @input="handleInput"></textarea>
</template>

<script setup lang="ts">

interface PropsIF {
  id?: string;
  placeholder?: string;
  class_cs?: string;
}

const props = defineProps<PropsIF>();
const emit = defineEmits<{
  (e: 'input', value: string): void;
}>();

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('input', target.value);
}
</script>
