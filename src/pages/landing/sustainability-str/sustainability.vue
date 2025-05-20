<template>
    <LandingLayout class_nav="!sticky bg-white">
        <Hero/>
        <Sustainability/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Hero from './components/hero.vue';
import Sustainability from './components/sustainability.vue';

</script>