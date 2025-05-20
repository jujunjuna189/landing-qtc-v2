<template>
    <div class="py-10 lg:py-20 lg:relative overflow-hidden">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -z-10 -top-[25rem] -right-[30rem] w-[60%] opacity-10 " />
        <div class="px-5 lg:px-32">
            <span class="text-xl lg:text-2xl text-primary-dark font-semibold">{{language[2]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="lg:flex lg:flex-col lg:gap-6 px-5 lg:px-32 mt-5 lg:mt-12">
            <div class="lg:w-[50%] text-justify">
                <span class="text-primary-dark">
                    {{language[3]}}
                </span>
            </div>
            <div class="lg:w-[50%] mt-5 lg:mt-0">
                <span class="text-primary-dark">
                    {{language[4]}}
                </span>
            </div>
        </div>
        <hr class="mx-5 lg:mx-32 border-white-muted my-10 lg:my-20" />
        <div class="px-5 lg:px-32 pt-5 lg:pt-14">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-16">
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic1" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Capital Investment</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic2" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">EPC</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic3" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Renewable Energy</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic4" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Industrial</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic5" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Integrated Telecomunication</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic6" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Real Estate & Property</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic7" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Developer</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic8" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Research and Development</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic9" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Business Compliance and<br /> Legal Advisory</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic10" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Asset Management</span>
                </div>
                <div class="text-center text-primary-dark w-[10rem] cursor-pointer">
                    <div class="flex justify-center mb-5">
                        <img :src="asset.ic11" alt="Capital Investment" class="w-[70px] lg:w-[90px]" />
                    </div>
                    <span class="text-sm lg:text-base">Supply Chain</span>
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

const language = landingLanguage[getLocalLanguage().key][RouterName.ourImpact];
</script>