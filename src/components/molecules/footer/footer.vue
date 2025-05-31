<template>
    <div class="bg-dark-dark py-10 px-5 lg:px-20">
            <div class="lg:flex lg:justify-between ">
                <ul class="flex flex-col lg:flex-row gap-3 lg:gap-7 lg:grow lg:items-center">
                    <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                        class="text-white-light text-sm lg:text-[15px] cursor-pointer" active-class="font-normal uppercase"
                        exact-active-class="font-normal uppercase">
                        <li>{{ item.name }}</li>
                    </router-link>
                </ul>
                <ul class="mt-5 lg:mt-0 flex gap-7 justify-end items-center">
                    <li class="text-white-light text-sm lg:text-[15px] cursor-pointer font-medium">News Update</li>
                    <li class="text-white-light text-sm lg:text-[15px] cursor-pointer font-medium">Press Release and Resources</li>
                </ul>
            </div>
            <hr class="my-3 border-dark-muted" />
            <div class="lg:flex lg:justify-between">
                <ul class="lg:flex lg:gap-4 lg:grow lg:items-center">
                    <li class="text-white-light text-[15px] cursor-pointer flex justify-center lg:justify-start">
                        <img :src="asset.lgLogo" alt="Logo" class="w-32" />
                    </li>
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer text-center">COPYRIGHT © 2024 QUANTUM TRANS CAPITAL, ALL RIGHT RESERVED</li>
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div class="flex gap-2">
                            <span>|</span>
                            <span>CONTACT US</span>
                        </div>
                    </li>
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div class="flex gap-2">
                            <span>|</span>
                            <span>PRIVACY POLICY</span>
                        </div>
                    </li>
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div class="flex gap-2">
                            <span>|</span>
                            <span>TERMS & CONDITIONS</span>
                        </div>
                    </li>
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div class="flex gap-2">
                            <span>|</span>
                            <span>COOKIE POLICY</span>
                        </div>
                    </li>
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer">
                        <div class="flex gap-2">
                            <span>|</span>
                            <span>SITEMAP</span>
                        </div>
                    </li>
                </ul>
                <ul class="flex gap-7 justify-end items-center">
                    <li class="text-white-light text-[10px] pt-4 cursor-pointer font-medium">CONNECT WITH US</li>
                </ul>
            </div>
        </div>
</template>

<script setup lang="ts">
import asset from '../../../assets/assets';
import menu from '../navbar/navbar.interface';

const menuData = menu;
</script>