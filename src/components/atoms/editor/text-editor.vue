<template>
  <div ref="editorContainer"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const editorContainer = ref<HTMLElement | null>(null)
let quill: Quill | null = null

interface Props {
  modelValue?: any
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
}>()

onMounted(() => {
  try {
    if (!editorContainer.value) return

    quill = new Quill(editorContainer.value, {
      theme: 'snow',
      placeholder: 'Tulis sesuatu...',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ header: [1, 2, 3, false] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    })

    quill.on('text-change', () => {
      if (!quill) return
      const contents = quill.getContents()
      emit('update:modelValue', contents)
    })
  } catch (e) {
    console.error('Quill init error:', e)
  }
})

const onSet = ref<boolean>(false);
watch(() => props.modelValue, () => {
    if (props.modelValue && quill != null && onSet.value == false) {
      quill.setContents([]);
      quill.setContents(props.modelValue)
      onSet.value = true;
    }
}, {immediate: true});
</script>

