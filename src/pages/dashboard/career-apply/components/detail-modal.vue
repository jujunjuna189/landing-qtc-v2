<template>
  <div class="inline-block" ref="modalRef">
    <!-- Trigger -->
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
        class="fixed w-full h-full bg-dark-dark/75"
        @click="toggleModal"
      ></div>

      <!-- Modal Box -->
      <div
        class="relative p-5 mt-10 mb-10 border border-white-muted rounded-lg bg-white-light w-[652px] z-20 shadow-all transform transition-transform duration-300"
        :class="isVisible ? 'translate-y-0' : '-translate-y-10'"
      >
        <div class="leading-3">
          <span class="text-base font-medium">Detail Career Apply</span>
        </div>

        <!-- Career Section -->
        <div class="border border-white-muted rounded-md my-2 px-3 py-2">
          <small>Career</small>
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <span class="font-semibold uppercase">{{ item?.career?.title }}</span>
              <small>{{ item?.career?.location }}</small>
            </div>
          </div>
        </div>

        <!-- Personal Info -->
        <div class="min-h-[25vh] flex flex-col gap-1 my-2 px-2">
          <!-- Full Name -->
          <div class="grid grid-cols-3">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">First Name</span>
              <span>{{ item?.first_name }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Middle Name</span>
              <span>{{ item?.middle_name }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Last Name</span>
              <span>{{ item?.last_name }}</span>
            </div>
          </div>

          <!-- Contact -->
          <div class="grid grid-cols-3">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Email</span>
              <span>{{ item?.email }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Phone Number</span>
              <span>{{ item?.country_code }}{{ item?.phone_number }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Gender</span>
              <span>{{ item?.gender }}</span>
            </div>
          </div>

          <!-- Marital -->
          <div class="grid grid-cols-3">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-semibold uppercase">Marital Status</span>
              <span>{{ item?.marital_status }}</span>
            </div>
          </div>

          <!-- Address Section -->
          <hr class="border-white-muted" />
          <span class="font-semibold uppercase">Address</span>

          <div class="grid grid-cols-4">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">City</span>
              <span>{{ item?.city }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Province</span>
              <span>{{ item?.province }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Country</span>
              <span>{{ item?.country }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Postal Code</span>
              <span>{{ item?.postal_code }}</span>
            </div>
          </div>

          <div class="grid grid-cols-1">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Full Address</span>
              <span>{{ item?.address }}</span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Current Address</span>
              <span>{{ item?.current_location }}</span>
            </div>
          </div>

          <!-- Documents -->
          <hr class="border-white-muted" />
          <span class="font-semibold uppercase">Document</span>

          <div class="grid grid-cols-1">
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Resume</span>
              <span
                v-if="item?.resume"
                @click="openLink(item.resume)"
                class="underline cursor-pointer text-blue-600"
              >
                {{ extractFileName(item.resume) }}
              </span>
            </div>
            <div class="py-2 border-b border-white-muted flex flex-col">
              <span class="font-medium uppercase">Support Document</span>
              <span
                v-if="item?.support_document"
                @click="openLink(item.support_document)"
                class="underline cursor-pointer text-blue-600"
              >
                {{ extractFileName(item.support_document) }}
              </span>
            </div>
          </div>

          <!-- Footer -->
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
import { onMounted, onUnmounted, ref } from 'vue'
import Button from '../../../../components/atoms/button/button.vue'


const props = defineProps({
  item: Object,
})

const isVisible = ref(false)
const modalRef = ref(null)
const careerModalComponent = ref(null)

const toggleModal = () => {
  isVisible.value = !isVisible.value
}

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    isVisible.value = false
  }
}

const openLink = (url) => {
  window.open(url, '_blank')
}

const extractFileName = (url) => {
  return url.split('/').pop()
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>
