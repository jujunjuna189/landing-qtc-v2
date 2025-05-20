<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero :assets="assets"/>
        <Business :assets="assets" :business="bussines"/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import useApi from '../../../helpers/use-api';
import Business from './components/business.vue';
import Hero from './components/hero.vue';

const api = new useApi();
const assets = ref<{}>({});
const isLoader = ref<boolean>(true);

const getAsset = (): void => {
    api.get(`asset?page=business-hightlights`).then((res) => {
        var data = {};
        Object.keys(res.list_data.data ?? {}).forEach((item, index) => {
            data[res.list_data.data[item].type] = res.list_data.data[item].file;
        });
        assets.value = data;
    });
}

export interface BusinessIF{
    logo: string,
    name: string,
}

const bussines = ref<BusinessIF[]>([]);

const getBusiness = (): void => {
    api.get(`business`).then((res) => {
        bussines.value = res.list_data.data;
        setTimeout(() => isLoader.value = false, 500);
    });
}

onMounted(() => {
    getAsset();
    getBusiness();
});

</script>