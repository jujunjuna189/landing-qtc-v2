<template>
  <div
    class="lg:fixed lg:top-0 lg:right-0 w-full lg:w-[80%] lg:h-[100vh] lg:bg-[#052446]/75 z-10 overflow-hidden lg:pt-5"
  >
    <div
      class="pl-5 lg:pl-[4.5rem] pr-5 lg:pr-[4.5rem] text-primary-dark lg:text-white-light lg:flex lg:justify-between lg:mt-28"
    >
      <ul>
        <li
          class="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold lg:text-xl whitespace-pre"
          @click="router.push(RouterName.media)"
          @mouseover="hoverText = language[5.1]"
          @mouseleave="hoverText = '-'"
        >
          {{ language[5.1] }}
        </li>
        <li
          class="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold lg:text-xl whitespace-pre"
          @click="router.push(RouterName.mediaMarketing)"
          @mouseover="hoverText = language[5.2]"
          @mouseleave="hoverText = '-'"
        >
          {{ language[5.2] }}
        </li>
      </ul>
      <div class="lg:w-[80%] px-20 hidden lg:flex justify-center pl-20">
        <div>
          <span class="text-6xl font-semibold animate-fade animate-duration-400">{{ hoverText }}</span>
          <div class="mt-10">
            <img
              :src="asset.imgMedia"
              alt="MediaImage"
              class="w-[90%] max-w-[90%] min-w-[90%] animate-fade animate-duration-400"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import landingLanguage from '../../../utils/language/landing-language';
import { RouterName } from '../../../routes/router-name';
import { getLocalLanguage } from '../../../utils/storage/local-storage';
import asset from '../../../assets/assets';

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key]['navbar'];
const hoverText = ref(language[5]);
</script>
