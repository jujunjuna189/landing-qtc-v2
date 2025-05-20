<template>
    <div class="relative">
        <div class="absolute top-10 right-32 z-10">
            <div class="flex gap-3">
                <div class="text-white-light flex justify-start items-center" @click="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg>
                </div>
                <div class="text-white-light flex justify-end items-center" @click="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg>
                </div>
            </div>
        </div>
        <Carousel v-bind="carouselConfig" ref="carouselRef" v-model="currentSlide">
            <Slide v-for="slide in 2" :key="slide">
                <div>
                    <div class="absolute top-0 bottom-0 left-0 right-0">
                        <img :src="assets[3]" alt="Image5" class="object-cover object-bottom h-[50vh] lg:h-full w-full animate-fade animate-duration-400" loading="eager" />
                    </div>
                    <div class="py-28 relative">
                        <div class="px-5 lg:px-32">
                            <span class="text-xl lg:text-2xl text-primary-dark font-medium cursor-pointer" >{{language[10]}}</span>
                            <div class="w-12 h-1 bg-secondary-dark" />
                        </div>
                        <div class="flex flex-col px-5 lg:px-36 mt-5 lg:mt-12">
                            <div class="lg:w-[50%]">
                                <span class="text-primary-dark font-medium">
                                    {{language[11]}}
                                </span>
                            </div>
                        </div>
                        <div class="lg:h-[40vh]" />
                    </div>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

defineProps<{
    assets: object,
}>()

const language = landingLanguage[getLocalLanguage().key][RouterName.main];

const carouselRef = ref()
const currentSlide = ref(1)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const carouselConfig = {
    itemsToShow: 1,
    itemsToScroll: 1,
    transition: 500,
    gap: 0,
}
</script>