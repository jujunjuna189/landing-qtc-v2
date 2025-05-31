<template>
    <div class="relative py-10 lg:py-20 animate-fade-up animate-duration-700 animate-delay-200">
        <SpiralAnimate :width="900" :height="900" :scale="900" :positionX="370" :positionY="0" :style="{right: 0, top: '-20px'}" />
        <div class="px-5 lg:px-32">
            <span class="text-lg lg:text-2xl text-primary-dark font-medium">{{language[3]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="flex flex-col px-5 lg:px-32 mt-7 lg:mt-16">
            <span class="text-base lg:text-4xl text-primary-dark font-semibold">{{language[4.1]}}</span>
            <span class="text-base lg:text-4xl text-primary-dark font-semibold">{{language[4.2]}}</span>
        </div>
        <div class="bg-primary-dark py-10 mt-24 relative">
            <div class="lg:w-[19vw] lg:max-w-[19vw] lg:min-w-[19vw] lg:absolute lg:bottom-0 lg:top-0 lg:bg-white-light" />
            <div class="lg:flex lg:gap-16 px-5 lg:px-12 lg:items-center lg:relative">
                <div class="-mt-20 lg:mt-0">
                    <img :src="assets[2]" alt="Image5" class="aspect-square object-cover object-top lg:w-[32vw] lg:max-w-[32vw] lg:min-w-[32vw] animate-fade animate-duration-400" loading="eager" />
                </div>
                <div class="lg:pr-20 mt-5 lg:mt-0">
                    <p class="text-base lg:text-5xl text-white-light font-semibold">{{language[5.1]}}</p>
                    <p class="text-base lg:text-5xl text-white-light font-semibold">{{language[5.2]}}</p>
                    <p class="text-base lg:text-5xl text-white-light font-semibold">{{language[5.3]}}</p>
                    <p class="text-base lg:text-5xl text-white-light font-semibold">{{language[5.4]}}</p>
                    <div class="mt-5 lg:mt-12 lg:w-[70%]">
                        <span class="text-sm lg:text-base text-white-light font-light">
                            {{language[6]}}
                        </span>
                    </div>
                    <div class="mt-5 lg:mt-12 lg:w-[70%]">
                        <span class="text-sm lg:text-base text-white-light font-light">
                            {{language[7]}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

defineProps<{
    assets: object,
}>()

const language = landingLanguage[getLocalLanguage().key][RouterName.main];
</script>