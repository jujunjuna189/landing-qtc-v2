<template>
    <LogoLoader v-if="isLoader != undefined" :isLoader="isLoader" />
    <div class="antialiased">
        <Navbar :scrollAnimation="scrollAnimation" :class_cs="class_nav" />
        <slot></slot>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Navbar from "../navbar/navbar.vue";
import Footer from "../footer/footer.vue";
import LogoLoader from "../loader/logo-loader.vue";

withDefaults(defineProps<{
    isLoader?: boolean,
    scrollAnimation?: boolean,
    class_nav?: string,
}>(), {
    isLoader: undefined,
    scrollAnimation: false,
    class_nav: '',
});

</script>