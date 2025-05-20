<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero :assets="assets"/>
        <Media :media="media" :mediaPage="mediaPage"/>
    </LandingLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import useApi from '../../../helpers/use-api';
import Media from './components/media.vue';
import Hero from './components/hero.vue';

const api = new useApi();
const assets = ref<{}>({});
const isLoader = ref<boolean>(true);

const getAsset = (): void => {
    api.get(`asset?page=media`).then((res) => {
        var data = {};
        Object.keys(res.list_data.data ?? {}).forEach((item, index) => {
            data[res.list_data.data[item].type] = res.list_data.data[item].file;
        });
        assets.value = data;
        setTimeout(() => isLoader.value = false, 500);
    });
}

export interface MediaIF {
    id: number,
    title: string,
    date: string,
    image: string,
    redirect: string,
}

export interface PaginationIF {
    current_page: number,
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: Array<{}>,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string,
    to: number,
    total: number,
}

const media = ref<MediaIF[]>([]);
const mediaPage = ref<PaginationIF>();

const getMedia = (): void => {
    api.get(`news?page=1&per_page=4`).then((res) => {
        media.value = res.list_data.data;
        mediaPage.value = res.list_data;
    });
}

onMounted(() => {
    getAsset();
    getMedia();
});

</script>