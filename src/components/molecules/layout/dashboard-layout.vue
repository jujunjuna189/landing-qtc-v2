<template>
  <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col bg-gradient-to-b from-white-light to-[#e0f2fe]">
    <DashboardNavbar :navbar="navbar" />
    <div class="grow flex overflow-y-auto">
      <DashboardSidebar />
      <div class="grow p-2">
        <slot />
        <div class="h-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardNavbar from '../navbar/dashboard-navbar.vue';
import DashboardSidebar from '../sidebar/dashboard-sidebar.vue';

defineProps({
  navbar: Object
})
</script>
