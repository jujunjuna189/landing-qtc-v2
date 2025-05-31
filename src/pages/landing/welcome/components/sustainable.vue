<template>
    <div class="py-12 lg:py-20 relative lg:flex lg:flex-row">
        <SpiralAnimate :width="1000" :height="1000" :scale="1200" :positionX="-500" :positionY="0" />
        <div class="lg:flex-1 lg:h-full md:py-10 lg:py-24">
            <div class="px-5 lg:px-32">
                <span class="text-base lg:text-2xl text-primary-dark font-medium">{{language[13]}}</span>
                <div class="w-12 h-1 bg-secondary-dark" />
            </div>
            <div class="flex flex-col gap-6 px-5 lg:px-36 lg:mt-12">
                <div class="lg:mt-3 text-primary-dark" :style="{ whiteSpace: 'pre-wrap' }" :dangerouslySetInnerHTML="{__html: language[14]}" />
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[15]}}
                </span>
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[16]}}
                </span>
            </div>
        </div>
        <div class="mt-7 lg:mt-0 lg:pr-20 lg:flex-1">
            <div class="bg-primary-dark w-full lg:h-full py-5 lg:py-24">
                <div class="px-5 lg:px-12">
                    <span class="text-base lg:text-2xl text-white-light font-medium">{{language[20]}}</span>
                    <div class="w-12 h-1 bg-secondary-dark" />
                </div>
                <div class="lg:flex lg:flex-col lg:gap-6 px-5 lg:px-12 mt-5 lg:mt-12">
                    <span class="text-sm text-white-light lg:text-[18px]">
                        {{language[18]}}
                    </span>
                </div>
                <div class="mt-10 px-5 lg:px-12 flex">
                    <div class="bg-white-light px-8 py-2 cursor-pointer" @click="router.push(RouterName.media)">
                        <span class="text-sm lg:text-base text-primary-dark font-semibold">{{language[19]}}</span>
                    </div>
                </div>
                <div class="lg:h-[20vh]" />
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

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key][RouterName.main];
</script>