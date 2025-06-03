<template>
    <div class="my-5 lg:my-32" />
    <div class="relative lg:flex lg:gap-20 px-5 lg:px-20 lg:h-[20vh] lg:justify-center lg:items-center">
        <div class="border border-primary-dark lg:flex">
            <div class="grow flex flex-col justify-center px-3 lg:px-0 py-3 lg:py-0 lg:pl-10 lg:pr-60">
                <span class="text-sm lg:text-base font-medium text-primary-dark">{{language[3]}}</span>
                <div class="mt-2 lg:mt-5">
                    <input type="text" :placeholder="language[4]" class="border-none focus:outline-none placeholder:text-primary-dark text-primary-dark" value="" />
                </div>
            </div>
            <div class="border-t lg:border-l border-primary-dark lg:my-5" />
            <div class="flex flex-col justify-center px-3 lg:px-0 py-3 lg:py-0 lg:pl-10 lg:pr-20">
                <span class="text-sm lg:text-base font-medium text-primary-dark">{{language[5]}}</span>
                <div class="mt-2 lg:mt-5">
                    <input type="text" :placeholder="language[6]" class="border-none focus:outline-none placeholder:text-primary-dark text-primary-dark" value="" />
                </div>
            </div>
            <div class="bg-gray-dark flex justify-center items-center px-3 lg:px-9 py-3 lg:py-9">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white-light" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </span>
            </div>
        </div>
    </div>
    <div :class="`flex justify-center relative ${isVisibility ? 'z-20' : 'z-10'}`">
        <div class="mt-10 mb-5 w-[60rem] transition-all duration-300" :class="{'hidden': isVisibility}">
            <div v-for="(item, i) in career" :key="i">
                <Modal :item="item">
                    <div class="hover:bg-gray-dark transition-all duration-300 ease-in-out p-4 cursor-pointer">
                        <div class="lg:flex lg:justify-between lg:items-center">
                            <div>
                                <span class="text-[20px] font-medium">{{item.title}}</span>
                                <div class="flex items-center gap-2 text-[13px]">
                                    <span>{{item.location}}</span>
                                    <div class="rounded-full bg-primary-light w-1 h-1" />
                                    <span class="font-medium">POSTING DATES <span class="font-normal">{{item.posting_date}}</span></span>
                                    <div v-if="item.status" class="rounded-full bg-primary-light w-1 h-1" />
                                    <div v-if="item.status">
                                        <span>{{item.status}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:flex gap-3 items-center mt-2 lg:mt-0 justify-end lg:justify-center hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    </div>
    <div class=""></div>
    <div class="flex justify-center mt-7 relative z-[1]">
        <div class="cursor-pointer" @click="isVisibility = false">
            <span class="font-bold text-primary-dark text-sm lg:text-base">{{language[7]}} ({{career.length}})</span>
        </div>
    </div>
    <div class="my-32" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { CareerIf } from '../career.vue';
import Modal from './modal.vue';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';

defineProps<{
    career: Array<CareerIf>,
}>();

const isVisibility = ref<boolean>(true);
const language = landingLanguage[getLocalLanguage().key][RouterName.careerExplore];
</script>