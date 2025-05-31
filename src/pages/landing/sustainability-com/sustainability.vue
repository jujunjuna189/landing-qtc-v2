<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero/>
        <Sustainability/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Hero from './components/hero.vue';
import Sustainability from './components/sustainability.vue';

const isLoader = ref<boolean>(true);
setTimeout(() => isLoader.value = false, 300);

</script>