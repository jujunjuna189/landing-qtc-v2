<template>
    <div class="relative">
        <div class="absolute top-0 bottom-0 left-5 text-primary-light justify-start items-center hidden lg:flex z-10" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" class="opacity-50" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg>
        </div>
        <div>
            <Carousel ref="carouselRef" v-model="currentSlide" v-bind="carouselConfig">
                <Slide v-for="(item, i) in pocket" :key="i">
                    <div class="carousel__item h-72 flex justify-center items-center">
                        <img :src="item.image" :alt="item.name" class="w-full  object-cover" />
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div class="absolute top-0 bottom-0 right-5 text-primary-light justify-end items-center hidden lg:flex z-10" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" class="opacity-50" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ProductIF } from '../business-detail.vue';


defineProps<{
    pocket: ProductIF[],
}>()

const carouselRef = ref()
const currentSlide = ref(1)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const carouselConfig = {
    itemsToScroll: 1,
    wrapAround: true,
    autoplay: 2000,
    transition: 1000,
    gap: 0,
    breakpoints: {
        1024: {
            itemsToShow: 3,
        },
        768: {
            itemsToShow: 3,
        },
        425: {
            itemsToShow: 1,
        },
        375: {
            itemsToShow: 1,
        },
        320: {
            itemsToShow: 1,
        },
    },
}

</script>