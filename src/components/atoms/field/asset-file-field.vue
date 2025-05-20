<template>
  <div class="flex flex-col">
    <div class="flex justify-start">
      <Button class="border hover:bg-slate-100 relative text-white-light">
        <input
          type="file"
          accept="image/*,video/*"
          class="absolute left-0 top-0 right-0 bottom-0 border opacity-0 cursor-pointer w-full"
          @change="handleInputChange"
        />
        {{ label || 'Upload Photo' }}
      </Button>
    </div>
    <small v-if="error" class="text-red-800 pl-1">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import Button from '../button/button.vue'

interface AssetData {
  file: File
  type: 'image' | 'video'
  dimension: string
  preview: string
  width: number
  height: number
  duration?: number
}

const props = defineProps<{
  label?: string
  error?: string
}>()

const emit = defineEmits<{
  (e: 'change', payload: AssetData): void
}>()

const reader = new FileReader()

function handleInputChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) {
    console.log('Please select a file.')
    return
  }

  const file = input.files[0]
  const randomString = Math.random().toString(36).substring(2, 8)
  const fileName = Date.now() + '-' + randomString

  const isImage = file.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|gif|webp)$/)
  const isVideo = file.name.match(/\.(mp4|webm|mkv|avi|mov|flv|wmv|m4v)$/)

  if (!isImage && !isVideo) {
    console.log('Please select a valid image or video file.')
    return
  }

  if (isImage) {
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const MAX_WIDTH = img.width
        const MAX_HEIGHT = img.height
        let width = MAX_WIDTH
        let height = MAX_HEIGHT

        if (width > height && width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        } else if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob((blob) => {
          if (!blob) return
          const resizedFile = new File([blob], fileName + '.webp', {
            type: 'image/webp',
            lastModified: Date.now(),
          })

          const data: AssetData = {
            file: resizedFile,
            type: 'image',
            dimension: `${MAX_WIDTH}x${MAX_HEIGHT}`,
            preview: URL.createObjectURL(resizedFile),
            width: MAX_WIDTH,
            height: MAX_HEIGHT,
          }
          emit('change', data)
        }, 'image/webp', 0.99)
      }

      img.onerror = () => {
        console.log('Invalid image content.')
      }

      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  if (isVideo) {
    const videoElement = document.createElement('video')
    videoElement.src = URL.createObjectURL(file)

    videoElement.onloadedmetadata = () => {
      const videoData: AssetData = {
        file,
        type: 'video',
        dimension: `${videoElement.videoWidth}x${videoElement.videoHeight}`,
        preview: URL.createObjectURL(file),
        duration: videoElement.duration,
        width: videoElement.videoWidth,
        height: videoElement.videoHeight,
      }
      emit('change', videoData)
    }

    videoElement.onerror = () => {
      console.log('Invalid video content.')
    }
  }
}
</script>