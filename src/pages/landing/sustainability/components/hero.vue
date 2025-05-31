<template>
    <div class="relative">
        <img :src="assets[1]" alt="Image5" class="object-cover object-center w-full h-[22vh] lg:h-[40vh] animate-fade animate-duration-400" loading="eager" />
        <div class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-5 lg:px-24">
            <div class="lg:flex lg:flex-col lg:gap-3 text-center">
                <span class="text-base lg:text-5xl text-white-light font-semibold" :style='{ textShadow: "0px 1px 10px #B8B8B8" }'>{{language[1.1]}}</span>
                <span class="text-base lg:text-5xl text-white-light font-semibold" :style='{ textShadow: "0px 1px 10px #B8B8B8" }'>{{language[1.2]}}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

defineProps<{
    assets: object,
}>()

const language = landingLanguage[getLocalLanguage().key][RouterName.sustainability];
</script>