<template>
    <div class="py-5 lg:py-20 relative">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[60%] opacity-10 " />
        <div class="px-5 lg:px-32">
            <span class="text-xl lg:text-4xl text-primary-dark font-semibold">{{language[1]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="flex flex-col px-5 lg:px-32 mt-5 lg:mt-12">
            <div class="lg:w-[50%] text-justify">
                <span class="text-primary-dark">
                    {{language[2]}}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.legal];
</script>