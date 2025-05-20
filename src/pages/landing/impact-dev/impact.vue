<template>
    <LandingLayout class_nav="!sticky bg-white">
        <Description/>
        <Porfolio/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import Porfolio from './components/porfolio.vue';

</script>