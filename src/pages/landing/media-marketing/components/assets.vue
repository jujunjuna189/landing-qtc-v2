<template>
    <div class="py-5 lg:py-10 relative px-5 lg:px-20">
        <div class="flex gap-2 items-center">
            <span class="text-xl text-primary-dark font-semibold">Download assets</span>
        </div>
    </div>
    <div class="relative lg:flex lg:gap-20 px-5 lg:px-20">
        <div class="lg:w-72 lg:min-w-72 lg:max-w-72">
            <span class="text-lg text-primary-dark font-semibold"> Available Category</span>
            <ul class="mt-8">
                <li class="pl-5 pr-20 py-2 hover:bg-gray-dark hover:text-primary-dark cursor-pointer font-semibold text-primary-dark" :class="{'bg-primary-dark !text-white-light': type == 'logo'}" @click="emit('refetch', {type: 'logo'})">Logo</li>
                <li class="pl-5 pr-20 py-2 hover:bg-gray-dark hover:text-primary-dark cursor-pointer font-semibold text-primary-dark" :class="{'bg-primary-dark !text-white-light': type == 'company-profile'}" @click="emit('refetch', {type: 'company-profile'})">Company Profile</li>
            </ul>
        </div>
        <div class="bg-primary-dark h-[1px] block lg:hidden"/>
        <div class="lg:border-l lg:border-primary-dark grow mt-5 lg:mt-0 plg:x-5 lg:px-16 pt-5 pb-28">
            <div v-if="assets.length == 0">
                <div class="text-gray-dark">
                    <div class="flex justify-center">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18.5 18.5l2.5 2.5" /><path d="M4 6h16" /><path d="M4 12h4" /><path d="M4 18h4" /></svg>
                    </div>
                    <div class="flex justify-center">
                        <span>Data Not Found</span>
                    </div>
                </div>
            </div>
            <div v-for="(item, i) in assets" :key="i">
                <div class="lg:flex lg:justify-between lg:items-center border-b border-primary-dark py-3 px-5">
                    <span class="font-medium text-primary-dark">{{item.title}}</span>
                    <div class="flex items-center gap-1 text-sm cursor-pointer mt-3 lg:mt-0" @click="handleDownload(item.file)">
                        <span class="text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-primary-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                        </span>
                        <span class="text-primary-dark font-medium">Download</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:my-40" />
</template>

<script setup lang="ts">
import { AssetMarketingIF } from '../media.vue';


defineProps<{
    assets: Array<AssetMarketingIF>,
    type: string,
}>()

const emit = defineEmits<{
    (e: 'refetch', type: {type: string}): void
}>()

const handleDownload = (path: string) => {
    const imageUrl = path; // Ganti dengan URL gambar
    const link = document.createElement("a");
    link.href = imageUrl;
    link.setAttribute("download", "asset.jpg"); // Nama file yang diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

</script>