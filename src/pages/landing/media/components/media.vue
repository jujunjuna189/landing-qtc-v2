<template>
    <div class="py-5 lg:py-20 relative">
        <SpiralAnimate :width="800" :height="350" :scale="800" :positionX="400" :positionY="-150" :style="{right: 0, top: 0}" />
        <div class="px-5 lg:px-32">
            <span class="text-base lg:text-2xl text-primary-dark font-semibold">{{language[2]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="px-5 lg:px-32 mt-5 lg:mt-16">
            <div class="lg:flex lg:justify-between lg:items-center bg-gray-dark">
                <div class="px-5 pt-2 lg:pt-0 lg:py-0 lg:px-9">
                    <span class="text-sm lg:text-base text-dark-muted text-opacity-50 font-medium">
                        {{language[3]}}
                    </span>
                </div>
                <div class="pb-4 lg:py-0 px-5 lg:px-0 lg:flex lg:gap-10 lg:items-center">
                    <div class="flex gap-3 lg:gap-10 h-full py-2">
                        <div class="h-full flex items-center gap-2 py-2 lg:py-0 cursor-pointer">
                            <span class="font-medium text-sm">{{language[4]}}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                            </span>
                        </div>
                        <div class="h-full flex items-center gap-2 py-2 lg:py-0 cursor-pointer">
                            <span class="font-medium text-sm">{{language[5]}}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                            </span>
                        </div>
                        <div class="h-full flex items-center gap-2 py-2 lg:py-0 cursor-pointer">
                            <span class="font-medium text-sm">{{language[6]}}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-dark-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                            </span>
                        </div>
                    </div>
                    <div class="bg-primary-dark px-10 py-3 text-center cursor-pointer">
                        <span class="text-sm lg:text-base uppercase text-white-light">
                            {{language[7]}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4 mt-5 lg:mt-12">
                <div v-for="(item, i) in media" :key="i">
                    <div class="shadow-all cursor-pointer bg-white-light" @click="router.push(`${RouterName.mediaPreview}/${item.id}`)">
                        <div class="aspect-[16/13] bg-primary-dark">
                            <img :src="item.image" alt="NewsImage" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-3">
                            <span class="text-primary-dark font-medium">{{item.title}}</span>
                        </div>
                        <div class="mt-2 p-3">
                            <span class="text-dark-muted text-sm">{{DateFormatter.v1({ value: item.date })}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-12">
                <div class="flex bg-gray-dark">
                    <div v-for="item in mediaPage?.last_page" :key="item">
                        <div class="py-1 px-3 text-primary-dark cursor-pointer">
                            {{item}}
                        </div>
                    </div>
                    <div class="py-1 px-3 text-primary-dark cursor-pointer">{{language[8]}} ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouterName } from '../../../../routes/router-name';
import { DateFormatter } from '../../../../utils/formatter/date-formatter';
import landingLanguage from '../../../../utils/language/landing-language';
import { MediaIF, PaginationIF } from '../media.vue';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';
import asset from '../../../../assets/assets';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';

defineProps<{
    media: MediaIF[],
    mediaPage: PaginationIF | undefined,
}>()

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key][RouterName.media];
</script>