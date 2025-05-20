<template>
    <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="flex justify-center items-center h-[25rem]">
            <img :src="asset.imgRNW1" alt="assets" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center items-center h-[25rem]">
            <img :src="asset.imgRNW2" alt="assets" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center items-center h-[25rem]">
            <img :src="asset.imgRNW3" alt="assets" class="w-full h-full object-cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';

</script>