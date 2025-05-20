<template>
    <div ref="navbarRef" class="fixed top-0 left-0 right-0 transition-all duration-300 z-10" :class="[class_cs]">
        <div class="flex items-center bg-transparent">
            <div class="flex gap-5 items-center lg:px-12 justify-center py-5">
                <div class="cursor-pointer relative">
                    <img :src="asset.lgLogoGif" alt="Logo" class="w-32 h-12 object-cover" @click="router.push(RouterName.main)" />
                </div>
            </div>
            <div class="grow relative" :class="[{'z-50': isHover}]">
                <nav class="hidden lg:block">
                    <ul class="flex justify-center space-x-10 list-none">
                        <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                            class="text-[15px] cursor-pointer hover:font-semibold text-primary-dark" :class="[
                                $route.path === item.path ? 'text-primary font-bold' : 'text-secondary',
                                {'text-white': isHover},
                            ]" active-class="font-semibold"
                            exact-active-class="font-semibold" @mouseover="onHover({status: item.sub && true, navName: item.path})" @mouseleave="onHover({status: item.sub && true, navName: item.path})">
                            <li>{{ item.name }}</li>
                        </router-link>
                    </ul>
                </nav>
            </div>
            <div class="px-12 hidden lg:block relative" :class="[{'z-50': isHover}]" @mouseover="onHover({status: false, navName: 'language'})" @mouseleave="onHover({status: false, navName: ''})">
                <div class="flex gap-1 items-center text-[15px] cursor-pointer text-primary-dark" :class="[{'text-white': isHover}]">
                    <span>{{getLocalLanguage().display}}</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                    </span>
                </div>
                <div class="absolute right-10 text-primary-dark" v-if="isHoverNavName == 'language'">
                    <div class="w-40 bg-white-light shadow-all rounded-md mt-2">
                        <ul>
                            <li class="py-2 px-2 border-b border-white-muted cursor-pointer hover:bg-slate-50" @click="() => {setLocalLanguage({ display: 'English', key: 'en' }); router.go(0  )}">
                                <div class="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                    English
                                </div>
                            </li>
                            <li class="py-2 px-2 border-b border-white-muted cursor-pointer hover:bg-slate-50" @click="() => {setLocalLanguage({ display: 'Mandarin', key: 'zh' }); router.go(0 )}">
                                <div class="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                    Mandarin
                                </div>
                            </li>
                            <li class="py-2 px-2 border-b border-white-muted cursor-pointer hover:bg-slate-50" @click="() => {setLocalLanguage({ display: 'Indonesia', key: 'id' }); router.go(0    )}">
                                <div class="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                    Indonesia
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <OurImpactNavbar v-if="isHover && isHoverNavName == RouterName.ourImpact" @mouseleave="onHover({status: false, navName: ''})"/>
            <SustainabilityNavbar v-if="isHover && isHoverNavName == RouterName.sustainability" @mouseleave="onHover({status: false, navName: ''})"/>
            <MediaNavbar v-if="isHover && isHoverNavName == RouterName.media" @mouseleave="onHover({status: false, navName: ''})"/>
            <CareerNavbar v-if="isHover && isHoverNavName == RouterName.career" @mouseleave="onHover({status: false, navName: ''})"/>
            <MobileNavbar :menuData="menuData" :isHover="isHover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import asset from "../../../assets/assets.ts";
import { RouterName } from "../../../routes/router-name.ts";
import { getLocalLanguage, setLocalLanguage } from "../../../utils/storage/local-storage.ts";
import menu from "./navbar.interface.ts";
import { useRouter } from 'vue-router'
import OurImpactNavbar from "./our-impact-navbar.vue";
import MobileNavbar from "./mobile-navbar.vue";
import SustainabilityNavbar from "./sustainability-navbar.vue";
import MediaNavbar from "./media-navbar.vue";
import CareerNavbar from "./career-navbar.vue";

const props = defineProps<{
    scrollAnimation: boolean,
    class_cs: string,
}>();

const router = useRouter()
const menuData = menu;

const navbarRef = ref<HTMLElement | null>(null);
const isHover = ref<boolean>(false);
const isHoverNavName = ref<string>('');

const onHover = ({ status, navName }: { status: boolean, navName: string }) => {
    isHover.value = status;
    isHoverNavName.value = navName;
}

const handleScroll = () => {
    if (!navbarRef.value) return;

    if (window.scrollY > 50) {
        if(props.scrollAnimation) navbarRef.value.classList.add('bg-white', 'shadow-all');
        if(!props.scrollAnimation) navbarRef.value.classList.add('shadow-all');
        navbarRef.value.classList.remove('bg-transparent');
    } else {
        if(props.scrollAnimation) navbarRef.value.classList.remove('bg-white', 'shadow-all');
        if(!props.scrollAnimation) navbarRef.value.classList.remove('shadow-all');
        navbarRef.value.classList.add('bg-transparent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>