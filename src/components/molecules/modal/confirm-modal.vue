<template>
  <div class="inline-block" ref="modalRef">
    <!-- Trigger -->
    <div class="cursor-pointer" @click="toggleModal">
      <slot></slot>
    </div>

    <!-- Modal -->
    <div
      class="fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300"
      :class="isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <!-- Overlay -->
      <div
        class="absolute w-full h-full bg-dark-dark/75"
        @click="toggleModal"
      ></div>

      <!-- Content -->
      <div
        class="relative p-5 mt-10 border border-white-muted rounded-lg bg-white-light w-[452px] z-20 shadow-all transform transition-transform duration-300"
        :class="isVisible ? 'translate-y-0' : '-translate-y-10'"
      >
        <div class="leading-3">
          <span class="text-base font-medium">{{ title }}</span>
          <br />
          <small>{{ description }}</small>
        </div>
        <div class="flex justify-end mt-5">
          <div class="flex gap-2">
            <Button
              class="!bg-transparent border border-dark-muted rounded-md"
              @click="toggleModal"
            >
              No
            </Button>
            <Button
              class="bg-slate-700 text-white-light rounded-md"
              @click="onSave"
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from '../../atoms/button/button.vue';

defineProps<{
    title: string,
    description: string,
}>();

const emit = defineEmits<{
  (e: 'onSave', value: string): void;
}>();

const isVisible = ref(false)
const modalRef = ref<HTMLElement | null>(null)

const toggleModal = () => {
  isVisible.value = !isVisible.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
    isVisible.value = false
  }
}

const onSave = () => {
  toggleModal()
  emit('onSave', '');
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>
