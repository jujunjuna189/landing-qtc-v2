<template>
  <div class="inline-block" ref="root">
    <!-- Button to toggle modal -->
    <div class="cursor-pointer" @click="toggleModal">
      <Button class="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal">
        <span>Update</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17.828 2a3 3 0 0 1 1.977 .743l.145 .136l1.171 1.17a3 3 0 0 1 .136 4.1l-.136 .144l-1.706 1.707l2.292 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.292 -3.293l-1.586 -1.585l-7.464 7.464a3.828 3.828 0 0 1 -2.474 1.114l-.233 .008c-.674 0 -1.33 -.178 -1.905 -.508l-1.216 1.214a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.214 -1.216a3.828 3.828 0 0 1 .454 -4.442l.16 -.17l10.586 -10.586a3 3 0 0 1 1.923 -.873l.198 -.006zm0 2a1 1 0 0 0 -.608 .206l-.099 .087l-1.707 1.707l2.586 2.585l1.707 -1.706a1 1 0 0 0 .284 -.576l.01 -.131a1 1 0 0 0 -.207 -.609l-.087 -.099l-1.171 -1.171a1 1 0 0 0 -.708 -.293z" />
        </svg>
      </Button>
    </div>

    <!-- Modal -->
    <div
      :class="[
        'fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      ]"
    >
      <!-- Overlay -->
      <div class="absolute w-full h-full bg-dark-dark/75" @click="toggleModal"></div>

      <!-- Modal Content -->
      <div
        :class="[
          'relative p-5 mt-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300',
          isVisible ? 'translate-y-0' : '-translate-y-10'
        ]"
      >
        <div class="leading-3">
          <span class="text-base font-medium">Update Asset</span><br />
        </div>
        <div class="min-h-[25vh] flex flex-col gap-1 my-2">
          <div class="mt-3">
            <div class="flex gap-5 items-center">
              <div>
                <div class="w-32 h-32 bg-slate-100 flex justify-center items-center relative">
                  <template v-if="controller.file?.type === 'image' && controller.file?.preview">
                    <div class="w-full h-full absolute bg-slate-100">
                      <img
                        :src="controller.file.preview"
                        alt="Asset"
                        class="object-cover w-full h-full"
                      />
                    </div>
                  </template>
                  <template v-else-if="controller.file?.type === 'video' && controller.file?.preview">
                    <div class="w-full h-full absolute bg-slate-100">
                      <video
                        :src="controller.file.preview"
                        class="object-cover w-full h-full"
                        controls
                      />
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex flex-col gap-1 text-center text-slate-300">
                      <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                        </svg>
                      </div>
                      <span class="font-medium">Asset</span>
                    </div>
                  </template>
                </div>
              </div>
              <div class="grow">
                <div class="mb-2">
                  <span class="font-medium">Upload Asset</span><br />
                  <small>Choose an asset and upload it here...</small>
                </div>
                <div class="flex">
                  <AssetFileField
                    label="Upload asset"
                    @change="(value) => onSetController('file', value)"
                  />
                  <span class="text-danger-dark">{{ errors.file }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow" />
          <div class="flex justify-end mt-3">
            <Button
              class="bg-slate-700 text-white-light rounded-md"
              @click="onSave"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import Button from '../../../../components/atoms/button/button.vue';
import { LinkChecker } from '../../../../utils/checker/link-checker';
import AllFileField from '../../../../components/atoms/field/all-file-field.vue';
import AssetFileField from '../../../../components/atoms/field/asset-file-field.vue';
import useApi from '../../../../helpers/use-api';

// Props
const props = defineProps<{ item: any; onSave?: () => void }>()
const emit = defineEmits<{
  (e: 'save'): void
}>()

// State
const api = new useApi();
const root = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const controller = reactive<any>({})
const errors = reactive<Record<string, string>>({})

// Toggle modal
function firstSettingController() {
  // Clear and assign new properties reactively
  Object.keys(controller).forEach(key => delete controller[key])
  Object.assign(controller, {
    ...props.item,
    file: {
      type: LinkChecker.getFileType(props.item?.file),
      preview: props.item?.file,
    },
  })
}

function toggleModal() {
  isVisible.value = !isVisible.value
  if (isVisible.value) {
    firstSettingController()
  }
}

// Click outside
function handleClickOutside(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    isVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

// Update controller
function onSetController(field: string, value: any) {
  controller[field] = value
}

// Save
async function onSave() {
    var dataBatch = { ...controller };
    dataBatch.file = controller.file?.['file'];
    api.post({path: `asset/${props.item.id}`, body: dataBatch}, true).then((res) => {
        isVisible.value = false;
        emit('save');
    }).catch((res) => {
        console.log(res);
    }).finally(() => {});
}
</script>