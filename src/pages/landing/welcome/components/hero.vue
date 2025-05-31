<template>
    <div class="relative">
        <img :src="assets[1]" alt="Image5" class="object-cover lg:scale-100 lg:object-top w-full h-[45vh] lg:h-[80vh] animate-fade animate-duration-400" loading="eager" />
        <div class="absolute top-0 bottom-0 flex items-center px-5 lg:px-24 pt-28 lg:pt-28">
            <div class="">
                <span class="text-sm lg:text-2xl text-white-light" :style="{textShadow: '0px 1px 10px #0c0c0c'}">{{language[1]}}</span>
                <div class="flex flex-col mt-1 lg:mt-3">
                    <span class="text-base lg:text-4xl text-white-light font-semibold" :style="{textShadow: '0px 1px 10px #0c0c0c'}">{{language[2.1]}}</span>
                    <span class="text-base lg:text-4xl text-white-light font-semibold" :style="{textShadow: '0px 1px 10px #0c0c0c'}">{{language[2.2]}}</span>
                </div>
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

const language = landingLanguage[getLocalLanguage().key][RouterName.main];
</script>