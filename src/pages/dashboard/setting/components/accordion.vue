<template>
  <div class="w-full mt-10">
    <div class="space-y-2">
      <AccordionItem
        v-for="(page, index) in pages"
        :key="page.key"
        :title="page.title"
        :items="assets[page.key]"
        :is-open="openIndex === index"
        @toggle="handleToggle(index, page.key)"
        @save="() => onGetAssets({ filter: { page: page.key } })"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AccordionItem from './accordion-item.vue'
import useApi from '../../../../helpers/use-api';

const api = new useApi();

const openIndex = ref(null)
const assets = ref({});

const pages = [
  { title: 'Main Page', key: 'main' },
  { title: 'Who We Are', key: 'about' },
  { title: 'Our Impact', key: 'our-impact' },
  { title: 'Business Highlights', key: 'business-hightlights' },
  { title: 'Sustainability', key: 'sustainability' },
  { title: 'Media', key: 'media' },
  { title: 'Contact', key: 'contact' },
]

function handleToggle(index, key) {
  openIndex.value = openIndex.value === index ? null : index
  onGetAssets({ filter: { page: key } })
}

const onGetAssets = ({filter}) => {
  api.get(`asset?page=${filter.page}`)
    .then((res) => {
      assets.value = {...assets, [filter.page]: res.list_data.data};
    })
    .catch((err) => {
      console.error(err);
    });
}
</script>
