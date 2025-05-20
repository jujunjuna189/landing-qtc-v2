<template>
    <div class="relative">
        <img :src="asset.ptCircle" alt="PattrenQTCDesign" class="animate-spin-slow absolute -top-[10rem] -right-[20rem] w-[60%] opacity-10 " />
        <div class="w-full pt-28 pb-16 flex justify-start items-center px-20 bg-primary-dark">
            <div class="grow flex justify-between">
                <div class="grow flex flex-col gap-1 text-start mt-20">
                    <div class="mb-4">
                        <span class="text-white-light font-semibold">Press Release</span>
                    </div>
                    <span class="text-5xl text-white-light font-semibold">Lighting Revolution:</span>
                    <span class="text-5xl text-white-light font-semibold">DMT Launches Cutting-Edge</span>
                    <span class="text-5xl text-white-light font-semibold"> LED Innovations</span>
                    <div class="mt-3">
                        <span class="text-white-light text-sm">November 14, 2024</span>
                    </div>
                </div>
                <div class="w-[30rem]">
                    <img :src="asset.img7" alt="Image5" class="aspect-[6/5] object-cover object-top animate-fade animate-duration-400" loading="eager" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';


</script>