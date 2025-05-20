<template>
    <LandingLayout class_nav="!sticky bg-white">
        <Hero/>
        <Preview :news="news"/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Hero from './components/hero.vue';
import Preview from './components/preview.vue';
import useApi from '../../../helpers/use-api';
import { useRoute } from 'vue-router';

const api = new useApi();
const route = useRoute();
const isLoader = ref<boolean>(true);
const news = ref<NewsIf>();

export interface NewsIf {
    id: string,
    image: string,
    title: string,
    content: string,
    redirect: string,
}

const getNews = (): void => {
    api.get(`news/${route.params.id}`).then((res) => {
        const raw = res.list_data;
        news.value = raw;
    }).finally(() => isLoader.value = false);
}

onMounted(() => {
    getNews();
});

</script>