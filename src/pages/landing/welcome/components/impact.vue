<template>
    <div class="bg-gray-dark py-10 lg:py-20 relative">
        <div class="px-5 lg:px-32">
            <span class="text-xl lg:text-2xl text-primary-dark font-medium">{{language[8]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="flex flex-col px-5 lg:px-36 mt-5 lg:mt-12">
            <div class="lg:w-[60%]">
                <span class="text-primary-dark font-medium">
                    {{language[9]}}
                </span>
            </div>
        </div>
        <div class="mt-10 lg:mt-20 px-5 lg:px-36">
            <div class="relative gap-5">
                <div class="absolute top-0 bottom-0 bg-gray-dark text-primary-light justify-start items-center hidden lg:flex" @click="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" class="opacity-50" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg>
                </div>
                <div class="lg:mx-20">
                    <Carousel ref="carouselRef" v-model="currentSlide" v-bind="carouselConfig">
                        <Slide v-for="(item, i) in items" :key="i">
                        <div
                            class="text-primary-dark cursor-pointer leading-2"
                        >
                            <!-- Gambar -->
                            <div class="mb-2 lg:mb-4 flex justify-center">
                            <img
                                :src="item.icon"
                                :alt="item.name"
                                class="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]"
                            />
                            </div>

                            <!-- Teks -->
                            <div class="min-h-10 text-center">
                                <span class="text-[10px] lg:text-[16px] leading-snug text-center">
                                    {{ item.name }}
                                </span>
                            </div>
                        </div>
                        </Slide>
                    </Carousel>
                </div>
                <div class="absolute top-0 bottom-0 right-0 bg-gray-dark text-primary-light justify-end items-center hidden lg:flex" @click="next">
                    <svg xmlns="http://www.w3.org/2000/svg" class="opacity-50" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import asset from '../../../../assets/assets';
import { ref } from 'vue';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.main];

const carouselRef = ref()
const currentSlide = ref(1)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const carouselConfig = {
    itemsToScroll: 1,
    wrapAround: true,
    autoplay: 2000,
    transition: 2000,
    gap: 0,
    breakpoints: {
        1024: {
            itemsToShow: 5,
        },
        768: {
            itemsToShow: 4,
        },
        425: {
            itemsToShow: 4,
        },
        375: {
            itemsToShow: 3,
        },
        320: {
            itemsToShow: 3,
        },
    },
}

export interface SlideItemIF {
    name: string;
    path: string;
    icon: string;
}

const items = ref<SlideItemIF[]>([
    {
        name: "Capital Investment",
        path: "/",
        icon: asset.ic1,
    },
    {
        name: "EPC",
        path: "/",
        icon: asset.ic2,
    },
    {
        name: "Renewable Energy",
        path: "/",
        icon: asset.ic3,
    },
    {
        name: "Industrial",
        path: "/",
        icon: asset.ic4,
    },
    {
        name: "Integrated Telecomunication",
        path: "/",
        icon: asset.ic5,
    },
    {
        name: "Real Estate & Property",
        path: "/",
        icon: asset.ic6,
    },
    {
        name: "Developer",
        path: "/",
        icon: asset.ic7,
    },
    {
        name: "Research and Development",
        path: "/",
        icon: asset.ic8,
    },
    {
        name: "Business Compliance and Legal Advisory",
        path: "/",
        icon: asset.ic9,
    },
    {
        name: "Asset Management",
        path: "/",
        icon: asset.ic10,
    },
    {
        name: "Supply Chain",
        path: "/",
        icon: asset.ic11,
    },
]);

</script>