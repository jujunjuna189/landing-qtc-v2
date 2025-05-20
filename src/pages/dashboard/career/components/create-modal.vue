<template>
    <div class="inline-block" ref="modalRef">
    <div class="cursor-pointer" @click="toggleModal">
      <div class="flex gap-2 justify-center items-center border rounded-full border-dark-muted pl-4 pr-2 py-1">
        <span class="border-dark-muted text-sm">Add New Career</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-primary-dark" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
          </svg>
        </span>
      </div>
    </div>

    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300 overflow-y-auto" :class="{ 'opacity-100': isVisible, 'opacity-0 pointer-events-none': !isVisible }">
      <div class="fixed w-full h-full bg-dark-dark/75" @click="toggleModal"></div>

      <div class="relative p-5 mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300" :class="{ 'translate-y-0': isVisible, '-translate-y-10': !isVisible }">
        <div class="leading-3">
          <span class="text-base font-medium">Add New Career</span><br />
          <small>Please fill in the career data form</small>
        </div>

        <div class="min-h-[25vh] flex flex-col gap-1 my-2">

          <div class="mt-3">
            <label>Title</label>
            <TextField placeholder="..." :error="errors.title" :value="controller.title" @input="value => onSetController({ field: 'title', value })" />
          </div>

          <div class="mt-3">
            <label>Location</label>
            <TextField placeholder="..." :error="errors.location" :value="controller.location" @input="value => onSetController({ field: 'location', value })" />
          </div>

          <div class="mt-3">
            <label>Posting Date</label>
            <DateField placeholder="..." :error="errors.posting_date" :value="controller.posting_date" @input="value => onSetController({ field: 'posting_date', value })" />
          </div>

          <div class="mt-3">
            <label>Apply Before</label>
            <DateField placeholder="..." :error="errors.apply_before" :value="controller.apply_before" @input="value => onSetController({ field: 'apply_before', value })" />
          </div>

          <div class="mt-3">
            <label>Job Indentification</label>
            <TextField placeholder="..." :error="errors.identification" :value="controller.identification" @input="value => onSetController({ field: 'identification', value })" />
          </div>

          <div class="mt-3">
            <label>Job Category</label>
            <TextField placeholder="..." :error="errors.category" :value="controller.category" @input="value => onSetController({ field: 'category', value })" />
          </div>

          <div class="mt-3">
            <label>Job Schedule</label>
            <TextField placeholder="..." :error="errors.schedule" :value="controller.schedule" @input="value => onSetController({ field: 'schedule', value })" />
          </div>

          <div class="mt-3">
            <label>Degree Level</label>
            <TextField placeholder="..." :error="errors.degree_level" :value="controller.degree_level" @input="value => onSetController({ field: 'degree_level', value })" />
          </div>

          <div class="mt-3">
            <label>Status</label>
            <TextField placeholder="..." :error="errors.status" :value="controller.status" @input="value => onSetController({ field: 'status', value })" />
          </div>

          <div class="mt-3">
            <label>Job Description</label>
            <TextEditor v-model="controller.description" @change="value => onSetController({ field: 'description', value })"/>
          </div>

          <div class="flex-grow" />

          <div class="flex justify-end mt-10">
            <Button class="bg-slate-700 text-white-light rounded-md" @click="onSave">
              <template #default>
                <label v-if="!loading">Save</label>
                <CircleLoader class_cs="!border-white" v-else />
              </template>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import Button from '../../../../components/atoms/button/button.vue';
import TextField from '../../../../components/atoms/field/text-field.vue';
import useApi from '../../../../helpers/use-api';
import CircleLoader from '../../../../components/atoms/loader/circle-loader.vue';
import DateField from '../../../../components/atoms/field/date-field.vue';
import TextEditor from '../../../../components/atoms/editor/text-editor.vue';

interface Controller {
  title: string
  location: string
  posting_date: string
  apply_before: string
  identification: string
  category: string
  schedule: string
  degree_level: string
  status: string
  description: string
}

const api = new useApi()

const loading = ref<boolean>(false)
const isVisible = ref<boolean>(false)

const controller = reactive<Controller>({
  title: '',
  location: '',
  posting_date: '',
  apply_before: '',
  identification: '',
  category: '',
  schedule: '',
  degree_level: '',
  status: '',
  description: '',
})

const errors = reactive<Record<string, string>>({})

const modalRef = ref<HTMLElement | null>(null)

const emit = defineEmits<{
  (e: 'onSave', value: string): void;
}>();

const toggleModal = (): void => {
  isVisible.value = !isVisible.value
}

const handleClickOutside = (event: MouseEvent): void => {
  if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
    isVisible.value = false
  }
}

const onSetController = ({ field, value }: { field: keyof Controller, value: any }): void => {
  controller[field] = value
}

const onSave = async (): Promise<void> => {
  loading.value = true;
  var dataBatch = { ...controller };
  dataBatch.description = JSON.stringify(controller.description);
  api.post({path: 'career', body: dataBatch}, true).then((res) => {
    isVisible.value = false;
    emit('onSave', '');
  }).catch((res) => {
      errors.value = res.errors;
  }).finally(() => loading.value = false);
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside))
</script>