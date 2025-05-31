<template>
    <div class="py-5 lg:py-20 relative">
        <SpiralAnimate :width="800" :height="350" :scale="800" :positionX="400" :positionY="-150" :style="{right: 0, top: '-30px'}" />
        <div class="px-5 lg:px-32">
            <span class="text-base lg:text-4xl text-primary-dark font-semibold">{{language[1]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="flex flex-col px-5 lg:px-32 mt-5 lg:mt-12">
            <div class="lg:w-[50%] text-justify">
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[2]}}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.supplyChain];
</script>