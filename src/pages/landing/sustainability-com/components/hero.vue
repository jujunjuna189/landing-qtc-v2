<template>
    <div class="relative">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -top-[25rem] -right-[20rem] w-[60%] opacity-10 " />
        <div class="w-full h-[22vh] lg:h-[40vh] flex justify-start items-center px-5 lg:px-24 bg-primary-dark">
            <div class="flex flex-col gap-1 text-start mt-5 lg:mt-20">
                <span class="text-white-light font-semibold">{{language[1]}}</span>
                <span class="text-xl lg:text-7xl text-white-light font-semibold">{{language[2]}}</span>
                <div class="w-10 lg:w-36 h-1 lg:h-3 bg-secondary-dark mt-2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.sustainabilityCommitment];
</script>