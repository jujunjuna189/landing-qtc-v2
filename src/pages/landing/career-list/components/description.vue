<template>
    <div class="lg:mt-16 px-5 lg:px-32 lg:text-lg">
        <div class="lg:pr-72 mt-5 mt-0">
            <span class="text-sm lg:text-base font-medium text-primary-dark">
                {{language[7]}}
            </span>
        </div>
    </div>
    <div class="flex gap-3 mt-5 lg:mt-16 px-5 lg:px-32 lg:text-lg">
        <div class="border border-primary-dark bg-primary-dark flex flex-col justify-center items-center py-2 px-5 cursor-pointer text-center lg:text-center" @click="router.push(RouterName.careerExplore)">
            <i class="text-sm lg:text-base text-white-light font-semibold">
                {{language[8]}}
            </i>
        </div>
    </div>
    <div class="my-3 lg:my-20" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key][RouterName.careerList];
</script>