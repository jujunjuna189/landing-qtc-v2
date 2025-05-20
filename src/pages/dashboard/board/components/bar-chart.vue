<template>
  <apexchart
    type="bar"
    :height="500"
    :options="chartData.options"
    :series="chartData.series"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  series: string[]
  titles: string[]
}>()

const chartData = ref({
  series: [{
      data: props.series ?? []
  }],
  options: {
      chart: {
          type: 'bar',
      },
      plotOptions: {
          bar: {
              borderRadius: 4,
              borderRadiusApplication: 'end',
              horizontal: true,
          }
      },
      dataLabels: {
          enabled: false
      },
      xaxis: {
          categories: props.titles ?? [],
      }
  },
})

watch(
  () => [props.series, props.titles],
  () => {
    chartData.value = {
        series: [{
            data: props.series ?? []
        }],
        options: {
            chart: {
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: props.titles ?? [],
            }
        },
    }
  },
  { immediate: true }
)
</script>