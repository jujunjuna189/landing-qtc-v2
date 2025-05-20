<template>
    <div class="relative">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -top-[20rem] -right-[20rem] w-[60%] opacity-10 " />
        <div class="w-full pt-5 lg:pt-28 pb-5 lg:pb-16 flex justify-start items-center px-5 lg:px-20 bg-primary-dark">
            <div class="grow flex flex-col gap-1 text-start lg:mt-10">
                <div class="">
                    <span class="text-white-light font-semibold">{{language[1]}}</span>
                </div>
                <span class="text-xl lg:text-7xl text-white-light font-semibold">{{language[2.1]}}</span>
                <span class="text-xl lg:text-7xl text-white-light font-semibold">{{language[2.2]}}</span>
                <div class="w-10 lg:w-36 h-1 lg:h-3 bg-secondary-dark mt-2 lg:mt-5" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.careerExplore];
</script>