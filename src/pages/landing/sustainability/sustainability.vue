<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero :assets="assets"/>
        <Sustainability/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import useApi from '../../../helpers/use-api';
import Hero from './components/hero.vue';
import Sustainability from './components/sustainability.vue';

const api = new useApi();
const assets = ref<{}>({});
const isLoader = ref<boolean>(true);

const getAsset = (): void => {
    api.get(`asset?page=sustainability`).then((res) => {
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