<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader" :loader="loader">
        <Hero :assets="assets"/>
        <Contact @loader="(value) => loader = value"/>
        <Map/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import useApi from '../../../helpers/use-api';
import Hero from './components/hero.vue';
import Contact from './components/contact.vue';
import Map from './components/map.vue';

const api = new useApi();
const assets = ref<{}>({});
const isLoader = ref<boolean>(true);
const loader = ref<boolean>();

const getAsset = (): void => {
    api.get(`asset?page=contact`).then((res) => {
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