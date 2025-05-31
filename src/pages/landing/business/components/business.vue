<template>
    <div class="pt-5 lg:pt-32 lg:pb-32 relative flex flex-col-reverse lg:flex-row">
        <SpiralAnimate :width="800" :height="500" :scale="800" :positionX="400" :positionY="-100" :style="{right: 0, top: '-30px'}" />
        <SpiralAnimate :width="900" :height="900" :scale="900" :positionX="-450" :positionY="200" :style="{bottom: '-200px'}" />
        <div class="lg:grow lg:h-full lg:mr-10">
            <div class="px-5 lg:px-20">
                <span class="text-base lg:text-2xl text-primary-dark font-medium">{{language[2]}}</span>
                <div class="w-12 h-1 bg-secondary-dark" />
            </div>
            <div class="lg:flex lg:flex-col lg:gap-6 px-5 lg:px-20 mt-5 px:mt-12">
                <span class="text-sm lg:text-base text-primary-dark lg:w-[80%]">
                    {{language[3]}}
                </span>
                <span class="text-sm lg:text-base text-primary-dark lg:w-[80%]">
                    {{language[4]}}
                </span>
                <span class="text-sm lg:text-base text-primary-dark lg:w-[80%]">
                    {{language[5]}}
                </span>
                <span class="text-sm lg:text-base text-primary-dark lg:w-[80%]">
                    {{language[6]}}
                </span>
            </div>
            <div class="lg:flex lg:items-center mt-10 lg:mt-28">
                <div class="bg-primary-dark h-96 lg:w-24 hidden lg:block" />
                <div class="relative lg:flex-1 lg:pr-72 flex justify-center items-center">
                    <img :src="assets[2]" alt="Image5" class="aspect-[6/5] object-cover object-top animate-fade animate-duration-400" loading="eager" />
                    <div class="absolute flex flex-col text-center justify-center items-center px-10">
                        <span class="text-base lg:text-5xl text-white-light font-semibold" :style='{ textShadow: "0px 1px 10px #B8B8B8" }'>{{language[7]}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-8 lg:my-0 lg:pr-20 lg:w-[25rem] lg:max-w-[25rem] lg:min-w-[25rem]">
            <div class="grid grid-cols-2 lg:flex lg:flex-col gap-5 lg:gap-10">
                <div v-for="(item, i) in business" :key="i">
                    <div class="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:gap-3 cursor-pointer">
                        <div class="border rounded-full w-20 min-w-20 max-w-20 h-20 border-primary-dark bg-white-light overflow-hidden">
                            <img :src="item.logo" :alt="item.name" class="w-full h-full rounded-full" />
                        </div>
                        <div class="text-center lg:text-start">
                            <span class="text-primary-dark font-medium text-sm lg:text-base">{{item.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';
import { BusinessIF } from '../business.vue';

defineProps<{
    assets: object,
    business: BusinessIF[],
}>()

const language = landingLanguage[getLocalLanguage().key][RouterName.businessHightlights];
</script>