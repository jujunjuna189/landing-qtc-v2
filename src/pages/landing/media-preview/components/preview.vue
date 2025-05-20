<template>
    <div class="grow py-20 px-32">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-1 text-sm cursor-pointer">
                <span class="text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                </span>
                <span class="text-primary-dark font-medium">Download</span>
            </div>
            <div class="flex items-center gap-1 text-sm">
                <span>Share via: </span>
                <div class="bg-primary-dark w-6 h-6 rounded-full"></div>
                <div class="bg-primary-dark w-6 h-6 rounded-full"></div>
                <div class="bg-primary-dark w-6 h-6 rounded-full"></div>
                <div class="bg-primary-dark w-6 h-6 rounded-full"></div>
            </div>
        </div>
        <div class="mt-10">
            <div class="mt-3 font-medium" :style="{ display: 'flex', whiteSpace: 'pre-wrap' }" v-html="news?.content" />
        </div>
        <div class="mt-10 flex gap-2 items-center text-primary-dark font-semibold cursor-pointer" @click="router.back()">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
            </span>
            <span>Go back to Press Releases</span>
        </div>
    </div>
    <div class="my-40" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { NewsIf } from '../media.vue';


const router = useRouter();

defineProps<{
    news?: NewsIf,
}>()

</script>