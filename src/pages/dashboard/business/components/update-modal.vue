<template>
    <div class="inline-block" ref="modalRef">
    <div class="cursor-pointer" @click="toggleModal">
        <Button class="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal">
            <span>Update</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.828 2a3 3 0 0 1 1.977 .743l.145 .136l1.171 1.17a3 3 0 0 1 .136 4.1l-.136 .144l-1.706 1.707l2.292 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.292 -3.293l-1.586 -1.585l-7.464 7.464a3.828 3.828 0 0 1 -2.474 1.114l-.233 .008c-.674 0 -1.33 -.178 -1.905 -.508l-1.216 1.214a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.214 -1.216a3.828 3.828 0 0 1 .454 -4.442l.16 -.17l10.586 -10.586a3 3 0 0 1 1.923 -.873l.198 -.006zm0 2a1 1 0 0 0 -.608 .206l-.099 .087l-1.707 1.707l2.586 2.585l1.707 -1.706a1 1 0 0 0 .284 -.576l.01 -.131a1 1 0 0 0 -.207 -.609l-.087 -.099l-1.171 -1.171a1 1 0 0 0 -.708 -.293z" /></svg>
        </Button>
    </div>

    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300 overflow-y-auto" :class="{ 'opacity-100': isVisible, 'opacity-0 pointer-events-none': !isVisible }">
      <div class="fixed w-full h-full bg-dark-dark/75" @click="toggleModal"></div>

      <div class="relative p-5 mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300" :class="{ 'translate-y-0': isVisible, '-translate-y-10': !isVisible }">
        <div class="leading-3">
          <span class="text-base font-medium">Update Business</span><br />
          <small>Please fill in the business data form</small>
        </div>

        <div class="min-h-[25vh] flex flex-col gap-1 my-2">
          <div class="flex gap-5 items-center">
            <div>
              <div class="w-32 h-32 bg-slate-100 flex justify-center items-center relative">
                <div v-if="controller?.logo?.['preview']" class="w-full h-full absolute bg-slate-100">
                  <img :src="controller?.logo['preview']" alt="ImageProfile" class="object-contain w-full h-full" />
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
                  <span class="font-medium">Logo</span>
                </div>
              </div>
            </div>
            <div class="grow">
              <div class="mb-2">
                <span class="font-medium">Upload Logo</span><br />
                <small>Choose a logo and upload it here...</small>
              </div>
              <div class="flex">
                <ButtonFileField label="Upload Logo" @change="value => onSetController({ field: 'logo', value })" />
                <span class="text-danger-dark">{{ errors.logo }}</span>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <label>Name</label>
            <TextField placeholder="..." :error="errors.name" :value="controller.name" @input="value => onSetController({ field: 'name', value })" />
          </div>

          <div class="mt-3">
            <label>Description</label>
            <AreaField placeholder="..." :error="errors.description" :value="controller.description" @input="value => onSetController({ field: 'description', value })" />
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
import { ref, reactive, onMounted, onBeforeUnmount, watch } from 'vue';
import Button from '../../../../components/atoms/button/button.vue';
import TextField from '../../../../components/atoms/field/text-field.vue';
import AreaField from '../../../../components/atoms/field/area-field.vue';
import ButtonFileField from '../../../../components/atoms/field/button-file-field.vue';
import useApi from '../../../../helpers/use-api';
import CircleLoader from '../../../../components/atoms/loader/circle-loader.vue';
import { BusinessIF } from '../business.vue';

interface Controller {
  logo: any
  name: string
  description: string
  redirect: string
}

const api = new useApi()

const loading = ref<boolean>(false)
const isVisible = ref<boolean>(false)

const props = defineProps<{
  item: BusinessIF,
}>();

const controller = reactive<Controller>({
    logo: null,
    name: '',
    description: '',
    redirect: ''
})

const errors = reactive<Record<string, string>>({})

const modalRef = ref<HTMLElement | null>(null)

const emit = defineEmits<{
  (e: 'onSave', value: string): void;
}>();

const toggleModal = (): void => {
  if (!isVisible.value) {
      setControllerFromProps();
  }
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

const setControllerFromProps = (): void => {
  controller.logo = {
    preview: props.item.logo,
  };
  controller.name = props.item.name;
  controller.description = props.item.description;
  controller.redirect = props.item.redirect;
};


const onSave = async (): Promise<void> => {
  loading.value = true;
  var dataBatch = { ...controller };
  dataBatch.logo = controller.logo?.['file'];
  api.post({path: `business/${props.item.id}`, body: dataBatch}, true).then((res) => {
    isVisible.value = false;
    emit('onSave', '');
  }).catch((res) => {
      console.log(res);
  }).finally(() => loading.value = false);
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside))
</script>