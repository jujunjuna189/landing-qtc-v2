<template>
    <div class="pt-10 lg:pt-56 pb-10 lg:pb-32 relative flex flex-col-reverse lg:flex-row">
        <SpiralAnimate :width="800" :height="800" :scale="800" :positionX="450" :positionY="0" :style="{right: 0, top: '-30px'}" />
        <div class="lg:flex-1 lg:h-full">
            <div class="px-5 lg:px-20">
                <span class="text-base lg:text-2xl text-primary-dark font-medium">{{language[2]}}</span>
                <div class="w-12 h-1 bg-secondary-dark" />
            </div>
            <div class="lg:flex lg:flex-col px-5 lg:px-20 mt-5 lg:mt-16">
                <span class="text-base lg:text-4xl text-primary-dark font-semibold">{{language[3.1]}}</span>
                <span class="text-base lg:text-4xl text-primary-dark font-semibold">{{language[3.2]}}</span>
            </div>
            <div class="lg:flex lg:flex-col gap-6 px-5 lg:px-20 mt-5 lg:mt-12">
                <p class="text-sm lg:text-base text-primary-dark mt-4 lg:mt-0">
                    {{language[4]}}
                </p>
                <p class="text-sm lg:text-base text-primary-dark mt-4 lg:mt-0">
                    {{language[5]}}
                </p>
                <p class="text-sm lg:text-base text-primary-dark mt-4 lg:mt-0">
                    {{language[6]}}
                </p>
                <p class="text-sm lg:text-base text-primary-dark mt-4 lg:mt-0">
                    {{language[7]}}
                </p>
            </div>
        </div>
        <div class="px-5 mb-7 lg:mb-0 lg:pr-20 lg:flex-1">
            <div class="bg-primary-dark w-full lg:h-full flex">
                <img :src="assets[2]" alt="Image5" class="object-cover object-center w-full h-full animate-fade animate-duration-400" loading="eager" />
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

defineProps<{
    assets: object,
}>()

const language = landingLanguage[getLocalLanguage().key][RouterName.about];
</script>