<template>
    <LandingLayout class_nav="!sticky bg-white" :isLoader="isLoader">
        <Hero :assets="[asset.img6]" />
        <Content :pocket="bussines" />
        <CarouselCs :pocket="product" />
        <CarouselBusiness :pocket="business" :id="routeId" @refetch="refetch" />
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Hero from './components/hero.vue';
import asset from '../../../assets/assets';
import Content from './components/content.vue';
import useApi from '../../../helpers/use-api';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CarouselCs from './components/carousel-cs.vue';
import CarouselBusiness from './components/carousel-business.vue';

const api = new useApi();
const route = useRoute();
const isLoader = ref<boolean>(true);

export interface BusinessIF{
    id: number,
    logo: string,
    name: string,
    description: string,
    redirect: string,
}

export interface ProductIF{
    id: number,
    name: string,
    image: string,
}

const business = ref<BusinessIF[]>([]);
const bussines = ref<BusinessIF>();
const product = ref<ProductIF[]>([]);

const routeId = computed(() => {
  const param = route.params.id
  return parseInt(Array.isArray(param) ? param[0] : param)
})

const refetch = (item: BusinessIF) => {
    getBusines(item.id);
    getProduct(item.id);
}

const getBusiness = (): void => {
    api.get(`business`).then((res) => {
        isLoader.value = false;
        const raw = res.list_data.data;
        business.value = raw;
    });
}

const getBusines = (id: any): void => {
    api.get(`business/${id}`).then((res) => {
        isLoader.value = false;
        const raw = res.list_data;
        bussines.value = raw;
    });
}

const getProduct = (id: any): void => {
    api.get(`product?business_id=${id}`).then((res) => {
        const raw = res.list_data.data;
        product.value = raw;
    });
}

onMounted(() => {
    getBusiness();
    getBusines(route.params.id);
    getProduct(route.params.id);
});

</script>