<template>
  <nav class="bg-white py-2 px-7 shadow-md z-10 flex justify-between items-center">
    <div class="cursor-pointer flex items-center gap-2" @click="handleClickLogo">
      <div class="min-w-28 w-28 max-w-28">
        <img :src="asset.lgLogo" alt="LogoQTC" class="w-full" />
      </div>
    </div>
    <div
      class="flex items-center gap-3 cursor-pointer"
      @click="handleClickAdmin"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <span class="font-semibold">Admin</span>
      <!--
      <div class="w-8 h-8 rounded-full bg-slate-200">
        <img :src="''" alt="Profile" />
      </div>
      -->
    </div>
    <component :is="element" v-if="element" />
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import asset from '../../../assets/assets'

const element = ref(null)

const handleClickLogo = () => {
  // logic ketika klik logo
}

const handleClickAdmin = () => {
  // logic ketika klik admin
}

const handleMouseOver = () => {
  // logic hover admin
}

const handleMouseLeave = () => {
  // logic mouse leave admin
}

// props
defineProps({
  navbar: Object // bisa disesuaikan sesuai kebutuhan
})
</script>
