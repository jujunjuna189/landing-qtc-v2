<template>
  <div class="py-10 lg:py-20 lg:relative">
    <SpiralAnimate :width="800" :height="500" :scale="800" :positionX="400" :positionY="-100" :style="{right: 0, top: '-30px'}" />
    <div class="px-5 lg:px-32">
      <span class="text-base lg:text-2xl text-primary-dark font-semibold">{{ language[2] }}</span>
      <div class="w-12 h-1 bg-secondary-dark" />
    </div>
    <div class="lg:flex lg:flex-col lg:gap-6 px-5 lg:px-32 mt-5 lg:mt-12">
      <div class="lg:w-[50%] text-justify">
        <span class="text-sm lg:text-base text-primary-dark">
          {{ language[3] }}
        </span>
      </div>
      <div class="lg:w-[50%] mt-5 lg:mt-0">
        <span class="text-sm lg:text-base text-primary-dark">
          {{ language[4] }}
        </span>
      </div>
    </div>
    <hr class="mx-5 lg:mx-32 border-white-muted my-10 lg:my-20" />
    <div class="px-5 lg:px-32 pt-5 lg:pt-14">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-16">
        <div
          v-for="(item, index) in impacts"
          :key="index"
          class="text-center text-primary-dark w-[10rem] cursor-pointer"
          @click="router.push(item.path)"
        >
          <div class="flex justify-center mb-5">
            <img :src="item.icon" :alt="item.label" class="w-[70px] lg:w-[90px]" />
          </div>
          <span class="text-sm lg:text-base" v-html="item.label"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import asset from '../../../../assets/assets';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';

const language = landingLanguage[getLocalLanguage().key][RouterName.ourImpact];
const router = useRouter();
const impacts = [
  { icon: asset.ic1, path: RouterName.capitalInvestment, label: 'Capital Investment' },
  { icon: asset.ic2, path: RouterName.epc, label: 'EPC' },
  { icon: asset.ic3, path: RouterName.renewableEnergy, label: 'Renewable Energy' },
  { icon: asset.ic4, path: RouterName.industrial, label: 'Industrial' },
  { icon: asset.ic5, path: RouterName.integratedTelecomunication, label: 'Integrated Telecomunication' },
  { icon: asset.ic6, path: RouterName.realEstateProperty, label: 'Real Estate & Property' },
  { icon: asset.ic7, path: RouterName.developer, label: 'Developer' },
  { icon: asset.ic8, path: RouterName.researchDevelopment, label: 'Research and Development' },
  { icon: asset.ic9, path: RouterName.legal, label: 'Business Compliance and<br /> Legal Advisory' },
  { icon: asset.ic10, path: RouterName.assetManagement, label: 'Asset Management' },
  { icon: asset.ic11, path: RouterName.supplyChain, label: 'Supply Chain' },
];
</script>