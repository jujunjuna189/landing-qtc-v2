<template>
    <LandingLayout :scrollAnimation="true" :isLoader="isLoader">
        <Hero :assets="assets"/>
        <About :assets="assets"/>
        <Impact/>
        <Bussines :assets="assets"/>
        <Sustainable/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Hero from './components/hero.vue';
import useApi from '../../../helpers/use-api';
import About from './components/about.vue';
import Impact from './components/impact.vue';
import Sustainable from './components/sustainable.vue';
import Bussines from './components/bussines.vue';

const api = new useApi();
const assets = ref<{}>({});
const isLoader = ref<boolean>(true);

const getAsset = (): void => {
    api.get(`asset?page=main`).then((res) => {
        var data = {};
        Object.keys(res.list_data.data ?? {}).forEach((item, index) => {
            data[res.list_data.data[item].type] = res.list_data.data[item].file;
        });
        assets.value = data;
        setTimeout(() => isLoader.value = false, 500);
    });
}

onMounted(() => {
    getAsset();
});

</script>