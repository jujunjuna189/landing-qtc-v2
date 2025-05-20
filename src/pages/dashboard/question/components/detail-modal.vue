<template>
  <div class="inline-block" ref="modalRef">
    <!-- Trigger Slot -->
    <div class="cursor-pointer" @click="toggleModal">
      <slot />
    </div>

    <!-- Modal -->
    <div
      class="fixed top-0 left-0 w-full h-full flex justify-center items-start z-10 transition-opacity duration-300 overflow-y-auto"
      :class="isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <!-- Overlay -->
      <div
        class="absolute w-full h-full bg-dark-dark/75"
        @click="toggleModal"
      ></div>

      <!-- Modal Content -->
      <div
        class="relative p-5 mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300"
        :class="isVisible ? 'translate-y-0' : '-translate-y-10'"
      >
        <div class="leading-3">
          <span class="text-base font-medium">Detail Question</span><br />
          <small>General Question</small>
        </div>

        <div class="min-h-[25vh] flex flex-col gap-1 my-2">
          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">First Name</span>
              <span>{{ item?.first_name }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Last Name</span>
              <span>{{ item?.last_name }}</span>
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Email Address</span>
              <span>{{ item?.email_address }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Contact Number</span>
              <span>{{ item?.contact_number }}</span>
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Inquiry Type</span>
              <span>{{ item?.inquiry_type }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold">File Attachment</span>
              <span
                v-if="item?.attachment"
                @click="openAttachment"
                class="underline cursor-pointer text-blue-600"
              >
                {{ item?.attachment?.split('/').pop() }}
              </span>
            </div>
          </div>

          <div class="pt-2 border-white-muted flex flex-col">
            <span class="font-semibold">Subject</span>
            <span>{{ item?.subject }}</span>
          </div>

          <div class="pt-1 border-white-muted flex flex-col">
            <span class="font-semibold">Message</span>
            <span>{{ item?.message }}</span>
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

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from '../../../../components/atoms/button/button.vue'

const props = defineProps({
  item: {},
})

const modalRef = ref(null)
const isVisible = ref(false)

const toggleModal = () => {
  isVisible.value = !isVisible.value
}

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    isVisible.value = false
  }
}

const openAttachment = () => {
  if (props.item?.attachment) {
    window.open(props.item.attachment, '_blank')
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>
