<script setup lang="ts">
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';

</script>

<template>
    <div class="relative">
        <SpiralAnimate :width="900" :height="900" :scale="900" :positionX="400" :positionY="-50" color="oklch(96.8% 0.007 247.896)" :style="{right: 0, top: 0}" />
        <div class="w-full pt-5 lg:pt-28 pb-5 lg:pb-16 flex justify-start items-center px-5 lg:px-20 bg-primary-dark">
            <div class="grow flex flex-col gap-1 text-start lg:mt-10">
                <div class="">
                    <span class="text-sm lg:text-base text-white-light font-semibold">Media</span>
                </div>
                <span class="text-xl lg:text-7xl text-white-light font-semibold">Marketing Assets</span>
                <div class="w-10 lg:w-36 h-1 lg:h-3 bg-secondary-dark mt-2" />
                <div class="mt-5 lg:mt-10 lg:w-[50%]">
                    <span class="text-white-light text-sm lg:text-base">
                        Our marketing assets are key resources to help showcase the brand, products and services of Quantum Trans Capital
                        and other subsidiaries Available to partners, media and internal teams, these materials ensure brand consistency and
                        support effective marketing initiatives.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>