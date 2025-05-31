<template>
    <div class="relative">
        <SpiralAnimate :width="900" :height="900" :scale="900" :positionX="400" :positionY="-170" color="oklch(96.8% 0.007 247.896)" :style="{right: 0, top: 0}" />
        <div class="w-full h-[30vh] lg:h-[40vh] flex justify-start items-center px-5 lg:px-24 bg-primary-dark">
            <div class="flex flex-col gap-1 text-start">
                <span class="text-sm lg:text-base text-white-light font-semibold">{{language[1]}}</span>
                <span class="text-xl lg:text-7xl text-white-light font-semibold">{{language[2]}}</span>
                <div class="w-20 lg:w-36 h-1 lg:h-3 bg-secondary-dark mt-2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.career];
</script>