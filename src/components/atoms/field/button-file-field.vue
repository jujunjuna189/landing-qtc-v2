<template>
  <div class="flex flex-col">
    <div class="flex justify-start">
      <Button class="border relative text-white-light rounded px-4 py-2">
        <input
          type="file"
          accept="image/*"
          class="absolute left-0 top-0 right-0 bottom-0 border opacity-0 cursor-pointer w-full h-full"
          @change="handleInputChange"
        />
        {{ label ?? 'Upload Photo' }}
      </Button>
    </div>
    <small v-if="error" class="text-red-800 pl-1">{{ error }}</small>
  </div>
</template>

<script setup>
import Button from '../button/button.vue'

const props = defineProps({
  label: String,
  error: String,
})

const emit = defineEmits(['change'])

const handleInputChange = (event) => {
  const reader = new FileReader()
  const imageFile = event.target.files[0]

  if (!imageFile) {
    console.log('Please select image.')
    return false
  }

  const randomString = Math.random().toString(36).substring(2, 8)
  const fileName = Date.now() + '-' + randomString + '.webp'

  if (!imageFile.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|gif|mp4|webp)$/)) {
    console.log('Please select valid image JPG,JPEG,PNG')
    return false
  }

  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      const MAX_WIDTH = img.width
      const MAX_HEIGHT = img.height
      let width = MAX_WIDTH
      let height = MAX_HEIGHT

      // Resize image to its own size if needed
      if (width > height && width > MAX_WIDTH) {
        height *= MAX_WIDTH / width
        width = MAX_WIDTH
      } else if (height > width && height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height
        height = MAX_HEIGHT
      }

      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob((blob) => {
        const file = new File([blob], fileName, {
          type: 'image/webp',
          lastModified: Date.now()
        })

        const dataBatch = {
          file: file,
          dimention: `${MAX_WIDTH}x${MAX_HEIGHT}`,
          preview: URL.createObjectURL(file),
          width: MAX_WIDTH,
          height: MAX_HEIGHT
        }

        emit('change', dataBatch);
      }, 'image/webp', 0.99)
    }

    img.onerror = () => {
      console.log('Invalid image content.')
      return false
    }

    img.src = e.target.result
  }

  reader.readAsDataURL(imageFile)
}
</script>
