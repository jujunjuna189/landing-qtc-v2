<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero/>
        <List/>
        <Description/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Hero from './components/hero.vue';
import List from './components/list.vue';
import Description from './components/description.vue';
import { ref } from 'vue';

const isLoader = ref<boolean>(true);
setTimeout(() => isLoader.value = false, 300);
</script>