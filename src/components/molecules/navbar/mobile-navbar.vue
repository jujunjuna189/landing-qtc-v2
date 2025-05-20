<template>
    <!-- Mobile vie -->
    <div class="px-5 block lg:hidden relative" :class="[{'z-50': isHover}]">
        <div class="bg-white py-2 px-3 text-primary-dark" @click="onClose()">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 6h10" /><path d="M4 12h16" /><path d="M7 12h13" /><path d="M4 18h10" /></svg>
        </div>
    </div>
    <div class="bg-white-light fixed top-0 left-0 right-0 bottom-0 z-40" :class="[{'block': isClose}, {'hidden': !isClose}]">
        <div class="flex justify-between items-center py-4 pr-5">
            <img :src="asset.lgLogoGif" alt="Logo" class="w-32 h-12 object-cover" @click="router.push(RouterName.main)" />
            <div @click="onClose()" class="text-primary-dark">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </div>
        </div>
        <ul class="overflow-y-auto h-screen lg:h-min">
            <div v-for="(item, i) in menuData" :key="`menu-${i}`">
                <li class="py-3 px-3">
                    <div class="flex justify-between items-center">
                        <router-link :to="item.path"
                            class="text-[15px] cursor-pointer hover:font-semibold text-primary-dark" :class="[
                                $route.path === item.path ? 'text-primary font-bold' : 'text-secondary',
                                {'text-white': isHover},
                            ]" active-class="font-semibold"
                            exact-active-class="font-semibold" >
                            {{ item.name }}
                        </router-link>
                        <div v-if="item.sub">
                            <svg @click="onActive({status: true, navName: item.path})" v-if="item.path != isActiveNavName" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                            <svg @click="onActive({status: false, navName: ''})" v-if="item.path == isActiveNavName" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
                        </div>
                    </div>
                    <div v-if="item.sub && isActive && item.path == RouterName.ourImpact && item.path == isActiveNavName" class="mt-2 bg-slate-100">
                        <OurImpactNavbar/>
                    </div>
                    <div v-if="item.sub && isActive && item.path == RouterName.sustainability && item.path == isActiveNavName" class="mt-2 bg-slate-100">
                        <SustainabilityNavbar/>
                    </div>
                    <div v-if="item.sub && isActive && item.path == RouterName.media && item.path == isActiveNavName" class="mt-2 bg-slate-100">
                        <MediaNavbar/>
                    </div>
                    <div v-if="item.sub && isActive && item.path == RouterName.career && item.path == isActiveNavName" class="mt-2 bg-slate-100">
                        <CareerNavbar/>
                    </div>
                </li>
            </div>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NavbarIF } from './navbar.interface';
import asset from '../../../assets/assets';
import { useRouter } from 'vue-router';
import { RouterName } from '../../../routes/router-name';
import OurImpactNavbar from './our-impact-navbar.vue';
import SustainabilityNavbar from './sustainability-navbar.vue';
import MediaNavbar from './media-navbar.vue';
import CareerNavbar from './career-navbar.vue';

defineProps<{
    isHover: boolean,
    menuData: NavbarIF[],
}>();

const router = useRouter()

const isClose = ref<boolean>(false);
const onClose = () => {
    isClose.value = !isClose.value;
}

const isActive = ref<boolean>(false);
const isActiveNavName = ref<string>('');
const onActive = ({ status, navName }: { status: boolean, navName: string }) => {
    isActive.value = status;
    isActiveNavName.value = navName;
}

</script>