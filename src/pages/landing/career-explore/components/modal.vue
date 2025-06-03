<template>
  <div class="inline-block w-full" ref="modalRef">
    <!-- Button to toggle modal -->
    <div class="cursor-pointer" @click="toggleModal">
      <slot />
    </div>

    <!-- Modal -->
    <div
      class="fixed top-0 left-0 w-full h-full lg:flex lg:justify-center lg:items-start z-20 transition-opacity duration-300 bg-dark-dark/75 overflow-y-auto"
      :class="{ 'opacity-100': isVisible, 'opacity-0 pointer-events-none': !isVisible }"
      @click="toggleModal"
    >
      <!-- Modal Content -->
      <div
        class="relative lg:mt-10 lg:mb-10 border border-white-muted lg:rounded-lg bg-white-light lg:w-[1024px] px-5 lg:px-20 py-5 lg:py-10 lg:mx-10 z-20 lg:shadow-all transform transition-transform duration-300"
        :class="{ 'translate-y-0': isVisible, '-translate-y-10': !isVisible }"
        @click.stop
      >
        <div class="flex justify-end lg:hidden" @click="toggleModal">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </div>
        <div class="p-5 lg:p-10 text-center">
          <span class="text-xl lg:text-3xl">{{ item?.title }}</span><br />
          <small class="text-primary-dark">{{ item?.location }}</small>
          <div class="my-5 lg:my-10 flex justify-center">
            <div class="w-14 h-[2px] bg-primary-dark" />
          </div>
          <span class="text-primary-dark">Job Description</span>
        </div>

        <div class="min-h-[25vh] lg:min-h-[50vh] flex flex-col gap-1 my-2 custome-content">
          <div class="mt-3 text-sm" v-html="quillConverse(JSON.parse(item?.description))" />
        </div>

        <div class="flex justify-center my-10">
          <div
            class="px-20 py-5 border border-primary-dark text-primary-dark cursor-pointer"
            @click="applyNow"
          >
            <span>APPLY NOW</span>
          </div>
        </div>

        <div class="text-center">
          <span class="text-primary-dark">Job Info</span>
          <div class="mt-2 bg-white-muted bg-opacity-50 py-5 px-3">
            <table>
              <tbody>
                <tr v-for="(value, label) in jobDetails" :key="label">
                  <td class="text-start pr-10 text-sm py-1">{{ label }}</td>
                  <td class="text-start text-primary-dark py-1 text-sm">{{ value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { quillConverse } from '../../../../utils/converse/quill-converse';
import { RouterName } from '../../../../routes/router-name';

const props = defineProps({
  item: Object
});

const modalRef = ref(null);
const isVisible = ref(false);
const router = useRouter();

const toggleModal = () => {
  isVisible.value = !isVisible.value;
};

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    isVisible.value = false;
  }
};

const isScrollbarVisible = () =>
  document.documentElement.scrollHeight > window.innerHeight;

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

watch(isVisible, (visible) => {
  const scrollBarWidth = window.innerWidth - document.body.clientWidth;
  if (visible) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }, isScrollbarVisible() ? 300 : 0);
  }
});

const applyNow = () => {
  isVisible.value = false;
  router.push(`${RouterName.careerForm}/${props.item?.id}`);
};

const jobDetails = computed(() => ({
  'Job Identification': props.item?.identification,
  'Job Category': props.item?.category,
  'Posting Date': props.item?.posting_date,
  'Apply Before': props.item?.apply_before,
  'Degree Level': props.item?.degree_level,
  'Job Schedule': props.item?.schedule,
  'Locations': props.item?.location
}));
</script>
