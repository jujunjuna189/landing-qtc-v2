<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero/>
        <Assets :assets="assets" :type="filter.type" @refetch="handleRefetch" />
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import useApi from '../../../helpers/use-api';
import Assets from './components/assets.vue';
import Hero from './components/hero.vue';

const api = new useApi();
const isLoader = ref<boolean>(true);
const assets = ref<Array<AssetMarketingIF>>([]);
const filter = reactive({
    type: 'logo',
});

export interface AssetMarketingIF{
    id: number,
    title: string,
    type: string,
    file: string,
}

function handleRefetch(payload: {type: string}) {
    filter.type = payload.type;
    getAsset()
}

const getAsset = (): void => {
    api.get(`asset-marketing?type=${filter.type}`).then((res) => {        
        const raw = res.list_data.data;
        assets.value = raw;
    }).finally(() => isLoader.value = false);
}

onMounted(() => {
    getAsset();
});

</script>