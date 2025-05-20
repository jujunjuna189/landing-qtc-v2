<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero/>
        <Description/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import Hero from './components/hero.vue';

const isLoader = ref<boolean>(true);
onMounted(()=> setTimeout(() => isLoader.value = false, 500));
</script>