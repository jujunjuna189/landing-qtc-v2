<template>
    <div class="mb-5 lg:mb-20 relative lg:flex lg:gap-5 lg:flex-row">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -z-10 -bottom-[15rem] -left-[30rem] w-[60%] opacity-10 " />
        <div class="lg:flex-1 lg:pl-20">
            <div class="bg-gray-dark h-full py-5 lg:py-24">
                <div class="px-5 lg:px-12">
                    <span class="text-xl lg:text-2xl text-primary-dark font-medium">{{language[8]}}</span>
                    <div class="w-12 h-1 bg-secondary-dark" />
                </div>
                <div class="flex flex-col gap-6 px-5 lg:px-12 mt-5 lg:mt-12">
                    <span class="text-primary-dark">
                        {{language[9]}}
                    </span>
                    <span class="text-primary-dark">
                        {{language[10]}}
                    </span>
                </div>
            </div>
        </div>
        <div class="lg:pr-20 lg:flex-1 lg:relative">
            <div class="bg-gray-dark w-full h-full py-5 lg:py-24">
                <div class="px-5 lg:px-12">
                    <span class="text-xl lg:text-2xl text-primary-dark font-medium">{{language[11]}}</span>
                    <div class="w-12 h-1 bg-secondary-dark" />
                </div>
                <div class="flex flex-col gap-6 px-5 lg:px-12 mt-5 lg:mt-12">
                    <span class="text-primary-dark">
                        {{language[12]}}
                    </span>
                    <span class="text-primary-dark">
                        {{language[13]}}
                    </span>
                    <span class="text-primary-dark">
                        {{language[14]}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.about];
</script>