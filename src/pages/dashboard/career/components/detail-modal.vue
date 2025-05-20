<template>
  <div ref="wrapper" class="inline-block">
    <!-- Button to toggle modal -->
    <div class="cursor-pointer" @click="toggleModal">
      <slot></slot>
    </div>

    <!-- Modal -->
    <div
      :class="[
        'fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300 overflow-y-auto',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      ]"
    >
      <!-- Overlay -->
      <div
        class="fixed w-full h-full bg-dark-dark/75"
        @click="toggleModal"
      ></div>

      <!-- Modal Content -->
      <div
        :class="[
          'relative p-5 mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300',
          isVisible ? 'translate-y-0' : '-translate-y-10'
        ]"
      >
        <div class="leading-3">
          <span class="text-base font-medium">Detail Career</span>
          <br />
        </div>
        <div class="min-h-[25vh] flex flex-col gap-1 my-2">
          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Title</span>
              <span>{{ item?.title }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Location</span>
              <span>{{ item?.location }}</span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Posting Date</span>
              <span>{{ item?.posting_date }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Apply Before</span>
              <span>{{ item?.apply_before }}</span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Job Identification</span>
              <span>{{ item?.identification }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Category</span>
              <span>{{ item?.category }}</span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Job Schedule</span>
              <span>{{ item?.schedule }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Status</span>
              <span>{{ item?.status }}</span>
            </div>
          </div>
          <div class="pt-2 border-white-muted flex flex-col">
            <span class="font-semibold">Job Description</span>
            <span>{{ item?.subject }}</span>
          </div>
          <div class="pt-1 border-white-muted flex flex-col">
            <div class="mt-3 custome-content" v-html="quillConverse(JSON.parse(item?.description))" />
          </div>
          <div class="flex-grow" />
          <div class="flex justify-end mt-10">
            <Button class="bg-slate-700 text-white-light rounded-md" @click="toggleModal">
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Button from '../../../../components/atoms/button/button.vue';
import { quillConverse } from '../../../../utils/converse/quill-converse';

const props = defineProps<{ item: any }>()

const wrapper = ref(null);
const isVisible = ref(false);

const toggleModal = () => {
  isVisible.value = !isVisible.value;
};

const handleClickOutside = (event: MouseEvent) => {
  if (wrapper.value && !(wrapper.value as HTMLElement).contains(event.target as Node)) {
    isVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
