<template>
  <div class="bg-white border border-gray-dark rounded-md">
    <div
      class="cursor-pointer p-4 hover:bg-white-muted rounded-t-md flex"
      @click="$emit('toggle')"
    >
      <div class="grow">
        <h3 class="font-semibold">{{ title }}</h3>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          viewBox="0 0 24 24">
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </div>
    </div>

    <div :class="['overflow-hidden transition-all duration-500 ease-in-out max-h-0', isOpen ? 'max-h-96 overflow-y-auto' : 'max-h-0']">
      <div v-if="isOpen" class="p-4 bg-gray-50">
        <table class="w-full border-collapse">
          <thead class="bg-slate-50">
            <tr>
              <th class="text-center w-[2.5rem] px-3 py-2 text-sm font-semibold border-y-[1.5px] border-white-muted">No</th>
              <th class="text-start px-3 py-2 text-sm font-semibold border-y-[1.5px] border-white-muted">Asset</th>
              <th class="text-start px-3 py-2 text-sm font-semibold border-y-[1.5px] border-white-muted">Type</th>
              <th class="text-start px-3 py-2 text-sm font-semibold border-y-[1.5px] border-white-muted">Page</th>
              <th class="pl-3 pr-5 py-2 text-sm font-semibold border-y-[1.5px] border-white-muted"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td class="px-3 py-3 text-sm border-y-[1.5px] border-white-muted">{{ index + 1 }}</td>
              <td class="px-3 py-3 text-sm border-y-[1.5px] border-white-muted">
                <div v-if="LinkChecker.getFileType(item.file) === 'image'" class="w-20 h-20">
                  <img :src="item.file" alt="Asset" class="object-cover w-full h-full" loading="lazy" />
                </div>
                <div v-else-if="LinkChecker.getFileType(item.file) === 'video'" class="w-20 h-20">
                  <video :src="item.file" class="object-cover w-full h-full" controls />
                </div>
              </td>
              <td class="px-3 py-3 text-sm border-y-[1.5px] border-white-muted">{{ item.type }}</td>
              <td class="px-3 py-3 text-sm border-y-[1.5px] border-white-muted">{{ item.page }}</td>
              <td class="px-3 py-3 text-sm border-y-[1.5px] border-white-muted">
                <div class="flex gap-2 items-center justify-end">
                  <UpdateModal :item="item" :onSave="onSave" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LinkChecker } from '../../../../utils/checker/link-checker';
import UpdateModal from './update-modal.vue'


defineProps({
  title: String,
  items: Array,
  isOpen: Boolean,
  onSave: Function,
})

</script>
