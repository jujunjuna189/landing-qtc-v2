<template>
  <div
    class="lg:fixed lg:top-0 lg:right-0 w-full lg:w-[80%] lg:h-[100vh] lg:bg-[#052446]/75 z-10 overflow-hidden lg:pt-5 relative"
  >
    <SpiralAnimate :width="800" :height="800" :scale="800" :positionX="400" :positionY="-250" color="oklch(96.8% 0.007 247.896)" :style="{right: 0, top: 0}" />
    <div
      class="pl-5 lg:pl-[4.5rem] pr-5 lg:pr-[4.5rem] text-primary-dark lg:text-white-light lg:flex lg:justify-between lg:mt-28"
    >
      <ul>
        <li
          v-for="(label, key) in languageList"
          :key="key"
          class="py-3 cursor-pointer animate-fade animate-duration-400 hover:font-semibold text-sm lg:text-xl whitespace-pre"
          @click="router.push(RouterNameMap[key])"
          @mouseover="hoverText = label"
          @mouseleave="hoverText = '-'"
        >
          {{ label }}
        </li>
      </ul>
      <div class="lg:w-[80%] px-20 hidden lg:flex justify-center pl-20">
        <div>
          <span class="text-6xl font-semibold animate-fade animate-duration-400">{{ hoverText }}</span>
          <div class="mt-10">
            <img
              :src="asset.imgOurImpact"
              alt="OurImpactImage"
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
import SpiralAnimate from '../animate/spiral-animate.vue';

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key]['navbar'];

// Refs for hover effect
const hoverText = ref(language[2]);

// Flatten & map keys and labels for v-for
const languageList = {
  '2.1': language['2.1'],
  '2.2': language['2.2'],
  '2.3': language['2.3'],
  '2.4': language['2.4'],
  '2.5': language['2.5'],
  '2.6': language['2.6'],
  '2.7': language['2.7'],
  '2.8': language['2.8'],
  '2.9': language['2.9'],
  '2.2.1': language['2.2.1'],
  '2.2.2': language['2.2.2'],
};

// Match keys to route names
const RouterNameMap = {
  '2.1': RouterName.capitalInvestment,
  '2.2': RouterName.epc,
  '2.3': RouterName.renewableEnergy,
  '2.4': RouterName.industrial,
  '2.5': RouterName.integratedTelecomunication,
  '2.6': RouterName.realEstateProperty,
  '2.7': RouterName.developer,
  '2.8': RouterName.researchDevelopment,
  '2.9': RouterName.legal,
  '2.2.1': RouterName.assetManagement,
  '2.2.2': RouterName.supplyChain,
};
</script>
