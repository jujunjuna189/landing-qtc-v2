<template>
    <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="flex justify-center items-center h-[25rem]">
            <img :src="asset.imgLGL1" alt="assets" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center items-center h-[25rem]">
            <img :src="asset.imgLGL2" alt="assets" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center items-center h-[25rem]">
            <img :src="asset.imgLGL3" alt="assets" class="w-full h-full object-cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/assets';

</script>