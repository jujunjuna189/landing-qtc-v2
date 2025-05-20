<template>
    <div class="w-6 h-6 border-4 border-primary-dark border-t-transparent rounded-full animate-spin" :class="class_cs"></div>
</template>

<script setup lang="ts">

defineProps<{
    class_cs?: string,
}>()

</script>