<template>
  <div class="flex flex-col">
    <div class="flex justify-start">
      <Button class="border relative">
        <input
          type="file"
          accept="*"
          class="absolute left-0 top-0 right-0 bottom-0 border opacity-0 cursor-pointer w-full"
          @change="handleInputChange"
        />
        <span class="whitespace-pre text-white-light">Upload File</span>
      </Button>
    </div>
    <small v-if="error" class="text-red-800 pl-1">{{ error }}</small>
  </div>
</template>

<script setup>
import Button from '../button/button.vue'


const props = defineProps({
  error: String
})

const emit = defineEmits(['change'])

const handleInputChange = (event) => {
  const file = event.target.files[0]
  if (file) emit('change', file)
}
</script>
