<template>
    <div class="pt-5 lg:pt-32 pb-5 lg:pb-32 relative lg:flex lg:flex-row px-5 lg:px-20">
        <SpiralAnimate :width="800" :height="500" :scale="800" :positionX="400" :positionY="-100" :style="{right: 0, top: '-30px'}" />
        <div class="lg:grow lg:w-[50rem] flex justify-center">
            <div class="w-[10rem] lg:w-[20rem] h-[10rem] lg:h-[20rem] rounded-full flex justify-center items-center overflow-hidden">
                <img :src="pocket?.logo" alt="Image6" class="object-contain object-bottom h-[10rem] lg:h-[20rem] aspect-video animate-fade animate-duration-400" loading="lazy" />
            </div>
        </div>
        <div class="lg:grow lg:h-full mt-5 lg:mt-0">
            <div class="px-5 lg:px-20 text-center lg:text-start">
                <span class="text-base lg:text-3xl text-primary-dark font-semibold">{{pocket?.name}}</span>
                <div class="flex justify-center lg:justify-start">
                    <div class="w-12 h-1 bg-secondary-dark" />
                </div>
            </div>
            <div class="flex flex-col gap-6 px-5 lg:px-20 mt-5 lg:mt-12">
                <div class="mt-3 text-primary-dark text-sm lg:text-base lg:w-[80%]" v-html="pocket?.description" />
            </div>
            <a class="mt-20 flex gap-3 text-primary-dark px-20 text-sm lg:text-base items-center font-semibold" :href="pocket?.redirect" target="_blank">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                </span>
                <span>
                    Go To The Website Page
                </span>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';
import { BusinessIF } from '../business-detail.vue';


defineProps<{
    pocket: BusinessIF | undefined,
}>()

</script>