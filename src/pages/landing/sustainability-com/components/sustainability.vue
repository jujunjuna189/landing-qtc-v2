<template>
    <div class="py-5 lg:py-10 relative px-5 lg:px-20">
        <div class="flex gap-2 items-center cursor-pointer">
            <span class="lg:text-xl text-primary-dark font-semibold">Sustainability in</span>
            <div class="py-1 px-2 lg:text-xl font-medium bg-secondary-dark text-white-light">Action</div>
        </div>
    </div>
    <div class="relative lg:flex lg:gap-20 lg:px-5 lg:px-20">
        <div class="lg:w-72 lg:min-w-72 mx-5 lg:mx-0 lg:max-w-72">
            <ul>
                <li class="pl-5 pr-20 py-2 bg-primary-dark border-b cursor-pointer border-primary-dark text-white-light font-semibold" @click="router.push(RouterName.sustainabilityCommitment)">Commitment</li>
                <li class="pl-5 pr-20 py-2 hover:bg-white-muted text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" @click="router.push(RouterName.sustainabilityStrategic)">Our Strategic at QTC</li>
                <li class="pl-5 pr-20 py-2 hover:bg-white-muted text-primary-dark border-b cursor-pointer border-primary-dark font-semibold" @click="router.push(RouterName.sustainabilityPartnerships)">Partnerships</li>
            </ul>
        </div>
        <div class="bg-gray-dark grow mt-5 lg:mt-0 p-5 lg:p-16">
            <span class="lg:text-2xl text-primary-dark font-semibold">
                {{language[3]}}
            </span>
            <div class="mt-5 lg:mt-10">
                <span class="text-primary-dark">
                    {{language[4]}}
                </span>
            </div>
            <div class="mt-2">
                <span class="text-primary-dark">
                    {{language[5]}}
                </span>
            </div>
            <div class="mt-5 lg:mt-10">
                <span class="text-primary-dark">
                    {{language[6]}}
                </span>
            </div>
        </div>
    </div>
    <div class="my-10 lg:my-40" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

const router = useRouter()
const language = landingLanguage[getLocalLanguage().key][RouterName.sustainabilityCommitment];
</script>