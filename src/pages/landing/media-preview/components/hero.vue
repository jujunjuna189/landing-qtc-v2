<template>
    <div class="relative">
        <SpiralAnimate :width="1000" :height="1000" :scale="1000" :positionX="530" :positionY="-230" color="oklch(98.4% 0.003 247.858)" :style="{right: 0, top: 0}" />
        <div class="w-full lg:pt-28 pb-5 lg:pb-16 flex justify-start items-center px-5 lg:px-20 bg-primary-dark">
            <div class="grow lg:flex lg:justify-between">
                <div class="grow flex flex-col gap-1 text-start mt-5 lg:mt-20">
                    <div class="mb-4">
                        <span class="text-white-light font-semibold">Press Release</span>
                    </div>
                    <div class="lg:pr-52">
                        <span class="text-base lg:text-5xl text-white-light font-semibold">{{news?.title}}</span>
                    </div>
                    <div class="mt-3">
                        <span class="text-white-light text-sm">{{DateFormatter.v1({ value: news?.date })}}</span>
                    </div>
                </div>
                <div class="w-full lg:w-[30rem] lg:min-w-[30rem] lg:max-w-[30rem]">
                    <img :src="news?.image ?? asset.img7" alt="Image5" class="aspect-[6/5] object-cover object-top animate-fade animate-duration-400" loading="eager" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';
import { NewsIf } from '../media.vue';
import { DateFormatter } from '../../../../utils/formatter/date-formatter';

defineProps<{
    news?: NewsIf,
}>()

</script>