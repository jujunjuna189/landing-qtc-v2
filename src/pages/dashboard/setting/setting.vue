<template>
  <DashboardLayout>
    <div class="shadow-all bg-white-light rounded-md px-7 py-5 grow">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="font-bold text-xl">Settings</span>
          <small>Landing View Assets</small>
        </div>
      </div>
      <div class="mt-5">
        <Accordion />
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '../../../components/molecules/layout/dashboard-layout.vue';
import Accordion from './components/accordion.vue';

</script>
