<template>
  <div :class="`flex justify-center items-center rounded-lg border-slate-400 hover:border-violet-400 border-2 border-dashed relative ${props.csClass}`">
    <div v-if="!previewUrl">
      <div class="flex justify-center mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
          <path d="M9 15l3 -3l3 3" />
          <path d="M12 12l0 9" />
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="font-medium text-slate-500 text-center">{{ fileName || props.placeholder }}</span>
        <small v-if="props.error" class="text-danger-dark pl-1 inline-block">{{ props.error }}</small>
      </div>
    </div>

    <img
      v-if="previewUrl && props.preview"
      :src="previewUrl"
      alt="Preview_image"
      class="h-full absolute object-contain rounded-lg"
    />

    <input
      type="file"
      accept="*"
      class="w-full h-full absolute opacity-0 left-0 top-0 right-0 bottom-0 cursor-pointer"
      @change="handleInputChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  csClass?: string
  error?: string
  placeholder?: string
  preview?: boolean
  onChange?: (file: File) => void
}>()

const file = ref<File | null>(null)

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const selectedFile = target.files?.[0]
  if (!selectedFile) {
    console.log('Please select image.')
    return
  }

  file.value = selectedFile
  props.onChange?.(selectedFile)
}

const fileName = computed(() => file.value?.name ?? '')

const previewUrl = computed(() => {
  if (!props.preview || !file.value) return ''
  return URL.createObjectURL(file.value)
})
</script>
