<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero/>
        <Career :career="career" />
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import useApi from '../../../helpers/use-api';
import Career from './components/career.vue';
import Hero from './components/hero.vue';

const api = new useApi();
const isLoader = ref<boolean>(true);
const career = ref<Array<CareerIf>>([]);

export interface CareerIf{
    id: number,
    title: string,
    location: string,
    posting_date: string,
    status: string,
}

const getCareer = (): void => {
    api.get(`career`).then((res) => {        
        const raw = res.list_data.data;
        career.value = raw;
    }).finally(() => isLoader.value = false);
}

onMounted(() => {
    getCareer();
});

</script>