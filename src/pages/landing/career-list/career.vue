<template>
    <LandingLayout class_nav="!sticky bg-white">
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
</script>