<template>
    <div class="py-5 lg:py-20 relative">
        <div class="lg:flex lg:flex-col px-5 lg:px-32 mt-5 lg:mt-12">
            <div class="lg:w-[50%] text-justify">
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[3]}}
                </span>
            </div>
            <div class="lg:w-[50%] mt-5 lg:mt-10">
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[4]}}
                </span>
            </div>
        </div>
        <div class="lg:flex lg:gap-3 mt-5 lg:mt-16 px-5 lg:px-32" @click="router.push(RouterName.careerExplore)">
            <div class="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-2 px-5 cursor-pointer">
                <i class="text-sm lg:text-base text-white-light font-semibold text-center">
                    {{language[5]}}
                </i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key][RouterName.career];
</script>