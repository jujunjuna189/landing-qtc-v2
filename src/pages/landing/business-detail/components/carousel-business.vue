<template>
    <div class="flex justify-center">
        <div class="relative py-32  lg:w-[30%]">
            <div class="absolute top-0 bottom-0 left-0 text-primary-light justify-start items-center flex z-10" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
            </div>
            <div class="mx-10">
                <Carousel ref="carouselRef" v-model="currentSlide" v-bind="carouselConfig">
                    <Slide v-for="(item, i) in pocket" :key="i">
                        <div class="text-center text-primary-dark transition-all duration-300">
                            <div class="flex justify-center">
                                <div class="border border-primary-dark rounded-full overflow-hidden transition-all duration-300">
                                    <img :src="item.logo" alt="Capital Investment" class="transition-width duration-300" :width="item.id == currentItem?.id ? 130 : 90" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
            <div class="absolute top-0 bottom-0 right-0 text-primary-light justify-end items-center flex z-10" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { BusinessIF } from '../business-detail.vue';


const props = defineProps<{
    pocket: BusinessIF[],
    id: number,
}>()

const emit = defineEmits<{
  (e: 'refetch', business: BusinessIF): void
}>()

const carouselRef = ref()
const currentSlide = ref(1)
const currentItem = ref<BusinessIF>();

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const carouselConfig: {
  itemsToScroll: number
  wrapAround: boolean
  gap: number
  itemsToShow: number
  snapAlign: 'center' | 'start' | 'end' | 'center-even' | 'center-odd'
} = {
  itemsToScroll: 1,
  wrapAround: true,
  gap: 0,
  itemsToShow: 3,
  snapAlign: 'center',
}

watch(() => currentSlide.value, () => {
    currentItem.value = props.pocket[currentSlide.value];
    emit('refetch', props.pocket[currentSlide.value]);
});

onMounted(() => {
    setTimeout(() => {
        const idx = props.pocket.findIndex((x) => x.id == props.id);
        carouselRef.value.slideTo(idx)
    },1000);
});

</script>