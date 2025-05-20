<template>
    <div class="inline-block" ref="modalRef">
    <div class="cursor-pointer" @click="toggleModal">
      <div class="flex gap-2 justify-center items-center border rounded-full border-dark-muted pl-4 pr-2 py-1">
        <span class="border-dark-muted text-sm">Add New News</span>
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
          <span class="text-base font-medium">Add New News</span><br />
          <small>Please fill in the news data form</small>
        </div>

        <div class="min-h-[25vh] flex flex-col gap-1 my-2">
          <div class="flex gap-5 items-center">
            <div>
              <div class="w-32 h-32 bg-slate-100 flex justify-center items-center relative">
                <div v-if="controller?.image?.['preview']" class="w-full h-full absolute bg-slate-100">
                  <img :src="controller?.image['preview']" alt="ImageProfile" class="object-contain w-full h-full" />
                </div>
                <div v-else class="flex flex-col gap-1 text-center text-slate-300">
                  <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 8h.01" />
                      <path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
                      <path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
                      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    </svg>
                  </div>
                  <span class="font-medium">Image</span>
                </div>
              </div>
            </div>
            <div class="grow">
              <div class="mb-2">
                <span class="font-medium">Upload Image</span><br />
                <small>Choose a image and upload it here...</small>
              </div>
              <div class="flex">
                <ButtonFileField label="Upload Image" @change="value => onSetController({ field: 'image', value })" />
                <span class="text-danger-dark">{{ errors.image }}</span>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <label>Name</label>
            <TextField placeholder="..." :error="errors.title" :value="controller.title" @input="value => onSetController({ field: 'title', value })" />
          </div>

          <div class="mt-3">
            <label>Description</label>
            <AreaField placeholder="..." :error="errors.content" :value="controller.content" @input="value => onSetController({ field: 'content', value })" />
          </div>

          <div class="mt-3">
            <label>Date</label>
            <DateField placeholder="..." :error="errors.date" :value="controller.date" @input="value => onSetController({ field: 'date', value })" />
          </div>

          <div>
            <label>Redirect</label>
            <TextField placeholder="https://" :error="errors.redirect" :value="controller.redirect" @input="value => onSetController({ field: 'redirect', value })" />
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
import AreaField from '../../../../components/atoms/field/area-field.vue';
import ButtonFileField from '../../../../components/atoms/field/button-file-field.vue';
import useApi from '../../../../helpers/use-api';
import CircleLoader from '../../../../components/atoms/loader/circle-loader.vue';
import DateField from '../../../../components/atoms/field/date-field.vue';

interface Controller {
  image: any
  title: string
  content: string,
  date: string
  redirect: string
}

const api = new useApi()

const loading = ref<boolean>(false)
const isVisible = ref<boolean>(false)

const controller = reactive<Controller>({
  image: null,
  title: '',
  content: '',
  date: '',
  redirect: ''
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
  dataBatch.image = controller.image?.['file'];
  api.post({path: 'news', body: dataBatch}, true).then((res) => {
    isVisible.value = false;
    emit('onSave', '');
  }).catch((res) => {
      console.log(res);
  }).finally(() => loading.value = false);
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside))
</script>