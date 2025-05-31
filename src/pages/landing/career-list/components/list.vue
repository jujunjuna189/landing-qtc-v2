<template>
    <div class="relative gap-20 lg:mt-20 lg:pr-72 lg:text-lg">
        <div class="px-5 lg:px-32 pt-5">
            <div class="flex flex-col border-b border-primary-dark py-3">
                <span class="font-medium text-primary-dark">{{language[3.1]}}</span>
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[3.2]}}
                </span>
            </div>
            <div class="flex flex-col border-b border-primary-dark py-3">
                <span class="font-medium text-primary-dark">{{language[4.1]}}</span>
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[4.2]}}
                </span>
            </div>
            <div class="flex flex-col border-b border-primary-dark py-3">
                <span class="font-medium text-primary-dark">{{language[5.1]}}</span>
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[5.2]}}
                </span>
            </div>
            <div class="flex flex-col border-b border-primary-dark py-3">
                <span class="font-medium text-primary-dark">{{language[6.1]}}</span>
                <span class="text-sm lg:text-base text-primary-dark">
                    {{language[6.2]}}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const language = landingLanguage[getLocalLanguage().key][RouterName.careerList];
</script>