<template>
    <DashboardLayout>
        <div class="flex gap-2">
          <div class="shadow-all bg-white-light rounded-md p-5 grow">
            <div class="p-2">
              <span class="font-bold text-base">Overview</span>
            </div>
            <div class="border-t border-white-muted p-2">
              <BarChart :series="analytic.series" :titles="analytic.titles" />
            </div>
          </div>

          <div class="shadow-all bg-white-light rounded-md p-5 min-w-80 w-80 max-w-80">
            <div class="p-2">
              <span class="font-bold text-base">Media Share</span>
            </div>
            <div class="border-t border-white-muted p-2 flex flex-col justify-center items-center relative">
              <div class="grow flex flex-col justify-center items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-dark-muted" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 18a1 1 0 0 1 .117 1.993l-.117 .007h-16a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                  <path d="M15.22 5.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z" />
                </svg>
                <span>Analysis not yet available</span>
                <small>analysis to find out the number of media share views</small>
              </div>
            </div>
          </div>
        </div>
    </DashboardLayout>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import DashboardLayout from '../../../components/molecules/layout/dashboard-layout.vue';
import useApi from '../../../helpers/use-api';
import BarChart from './components/bar-chart.vue';

interface AnalyticIF {
  title: string;
  total_views: string;
}

interface AnalyticData {
  series: string[];
  titles: string[];
}

const api = new useApi();

const analytic = reactive<AnalyticData>({
  series: [],
  titles: [],
});

const getAnalytics = async () => {
  api.get('analytic/summary')
    .then((res) => {
      const series: string[] = [];
      const titles: string[] = [];
      
      (res.list_data ?? []).forEach((item: AnalyticIF) => {
        series.push(item.total_views);
        titles.push(item.title);
      });

      analytic.series = series;
      analytic.titles = titles;
    })
    .catch((err) => {
      console.error(err);
    });
};

onMounted(() => {
    getAnalytics();
});

</script>