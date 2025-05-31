<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Description/>
        <Porfolio/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import Porfolio from './components/porfolio.vue';

const isLoader = ref<boolean>(true);
setTimeout(() => isLoader.value = false, 300);

</script>