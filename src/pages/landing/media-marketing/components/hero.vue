<script setup lang="ts">
import asset from '../../../../assets/assets';

</script>

<template>
    <div class="relative">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -top-[10rem] -right-[25rem] w-[60%] opacity-10 " />
        <div class="w-full pt-5 lg:pt-28 pb-5 lg:pb-16 flex justify-start items-center px-5 lg:px-20 bg-primary-dark">
            <div class="grow flex flex-col gap-1 text-start lg:mt-10">
                <div class="">
                    <span class="text-white-light font-semibold">Media</span>
                </div>
                <span class="text-xl lg:text-7xl text-white-light font-semibold">Marketing Assets</span>
                <div class="w-10 lg:w-36 h-1 lg:h-3 bg-secondary-dark mt-2" />
                <div class="mt-5 lg:mt-10 lg:w-[50%]">
                    <span class="text-white-light text-sm">
                        Our marketing assets are key resources to help showcase the brand, products and services of Quantum Trans Capital
                        and other subsidiaries Available to partners, media and internal teams, these materials ensure brand consistency and
                        support effective marketing initiatives.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>