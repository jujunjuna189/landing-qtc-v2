<template>
    <div class="bg-primary-dark py-10 mt-10 lg:mt-24 px-5 lg:px-20 lg:relative">
        <span class="text-base lg:text-4xl text-white-light font-semibold">{{language[15]}}</span>
        <div class="w-12 h-1 bg-secondary-dark mt-2" />
        <div class="lg:flex lg:flex-row lg:justify-between">
            <div class="flex flex-col gap-1 mt-5 lg:mt-20 lg:flex-1">
                <span class="text-base lg:text-4xl text-white-light font-semibold">{{language[16]}}</span>
                <span class="text-base lg:text-4xl text-white-light font-semibold">{{language[17]}}</span>
            </div>
            <div class="mt-5 lg:mt-20 lg:flex-1">
                <span class="text-sm lg:text-base text-white-light font-light">
                    {{language[18]}}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.about];
</script>