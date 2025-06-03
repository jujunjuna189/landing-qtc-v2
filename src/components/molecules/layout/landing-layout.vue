<template>
    <LogoLoader v-if="isLoader != undefined" :isLoader="isLoader" />
    <Loader v-if="loader != undefined" :loader="loader" />
    <div class="antialiased">
        <Navbar :scrollAnimation="scrollAnimation" :class_cs="class_nav" />
        <div class="overflow-hidden">
            <slot></slot>
        </div>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Navbar from "../navbar/navbar.vue";
import Footer from "../footer/footer.vue";
import LogoLoader from "../loader/logo-loader.vue";
import Loader from "../loader/loader.vue";

withDefaults(defineProps<{
    isLoader?: boolean,
    loader?: boolean,
    scrollAnimation?: boolean,
    class_nav?: string,
}>(), {
    isLoader: undefined,
    loader: undefined,
    scrollAnimation: false,
    class_nav: '',
});

</script>