<template>
  <div>
    <textarea
      :name="id"
      :id="id"
      :value="value"
      class="border border-primary-dark px-3 py-2 w-full focus:outline-none"
      autocomplete="false"
      :placeholder="placeholder"
      rows="10"
      @input="handleInput"
    ></textarea>
    <small v-if="error" class="text-danger-dark mt-1 block">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
interface PropsIF {
  id?: string;
  value?: string;
  placeholder?: string;
  class_cs?: string;
  error?: string;
}

const props = defineProps<PropsIF>();

const emit = defineEmits<{
  (e: 'input', value: string): void;
}>();

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  emit('input', target.value);
}
</script>
