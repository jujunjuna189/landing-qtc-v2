<template>
    <div class="relative">
        <img :src="assets[0]" alt="Image6" class="object-cover object-bottom w-full h-[22vh] lg:h-[70vh] animate-fade animate-duration-400" loading="eager" />
        <div class="absolute top-0 bottom-0 left-0 right-0 flex justify-center lg:justify-start items-center px-5 lg:px-24">
            <div class="flex flex-col lg:gap-3 text-center lg:text-start">
                <span class="text-base lg:text-8xl text-white-light font-semibold" :style='{ textShadow: "0px 1px 10px #B8B8B8" }'>Leading For Solar</span>
                <span class="text-base lg:text-8xl text-white-light font-semibold" :style='{ textShadow: "0px 1px 10px #B8B8B8" }'>PV Technology</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    assets: object,
}>()

</script>