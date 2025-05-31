<template>
    <div class="py-10 lg:py-20 relative">
        <SpiralAnimate :width="800" :height="500" :scale="800" :positionX="400" :positionY="-200" :style="{right: 0, top: '-30px'}" />
        <div class="px-5 lg:px-32">
            <span class="text-xl lg:text-2xl text-primary-dark font-semibold">{{language[2]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="flex flex-col px-5 lg:px-32 mt-5 lg:mt-12">
            <div class="lg:w-[50%] lg:text-justify">
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[3]}}
                </span>
            </div>
            <div class="lg:w-[50%] mt-5 lg:mt-10">
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[4]}}
                </span>
            </div>
        </div>
        <div class="lg:flex lg:gap-3 mt-5 lg:mt-20 px-5 lg:px-32">
            <div class="border mt-2 border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-5 px-[3%] cursor-pointer group" @click="router.push(RouterName.sustainabilityCommitment)">
                <span class="text-base lg:text-4xl text-white-light font-semibold">
                    Commitment
                </span>
                <div class="w-full h-1 group-hover:bg-secondary-dark mt-2 hidden lg:block" />
            </div>
            <div class="grow border mt-2 border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-5 px-5 cursor-pointer group" @click="router.push(RouterName.sustainabilityStrategic)">
                <span class="text-base lg:text-4xl text-white-light whitespace-nowrap font-semibold">
                    Our Strategy At QTC
                </span>
                <div class="w-full h-1 group-hover:bg-secondary-dark mt-2 hidden lg:block" />
            </div>
            <div class="border mt-2 border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-5 px-[3%] cursor-pointer group" @click="router.push(RouterName.sustainabilityPartnerships)">
                <span class="text-base lg:text-4xl text-white-light font-semibold">
                    Partnerships
                </span>
                <div class="w-full h-1 group-hover:bg-secondary-dark mt-2 hidden lg:block" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import asset from '../../../../assets/assets';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';

const language = landingLanguage[getLocalLanguage().key][RouterName.sustainability];
const router = useRouter();
</script>