<template>
  <aside class="sticky top-0 p-2 w-56 max-w-56 min-w-56">
    <div class="rounded-md shadow-all w-full h-full bg-white-light overflow-y-auto p-1">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.name"
          :class="[
            'py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer',
            isActive(item.path)
              ? 'bg-primary-dark text-white-light'
              : 'hover:bg-white-muted hover:text-dark-dark'
          ]"
          @click="navigateTo(item.path)"
        >
          <div class="flex gap-2 items-center">
            <span v-html="item.icon"></span>
            <span>{{ item.name }}</span>
          </div>
        </li>
        <li class="text-dark-muted py-2 bg-white-muted text-sm px-2 mt-3 mb-1 font-medium rounded-md">Landing View...</li>
        <li
          :class="[
            'py-2 pl-3 pr-2 text-sm rounded-md cursor-pointer',
            isActive('settings') ? 'bg-primary-dark text-white-light' : 'hover:bg-white-muted hover:text-dark-dark'
          ]"
          @click="navigateTo(routeName.adminSettings)"
        >
          <div class="flex gap-2 items-center">
            <span v-html="icons.settings"></span>
            <span>Settings</span>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouterName } from '../../../routes/router-name'

const route = useRoute()
const router = useRouter()

const routeName = {
  adminDashboard: RouterName.adminDashboard,
  adminBusiness: RouterName.adminBusiness,
  adminProduct: RouterName.adminProduct,
  adminNews: RouterName.adminNews,
  adminQuestion: RouterName.adminQuestion,
  adminAssets: RouterName.adminAssets,
  adminCareer: RouterName.adminCareer,
  adminCareerApply: RouterName.adminCareerApply,
  adminSettings: RouterName.adminSettings,
}

const currentSection = computed(() => route.path.split('/')?.[2])

const isActive = (path) => currentSection.value === path || routeName[path] === route.path

const navigateTo = (path) => {
  const destination = routeName[path] || path
  router.push(destination)
}

const icons = {
  dashboard: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 18a1 1 0 0 1 .117 1.993l-.117 .007h-16a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M15.22 5.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z" /></svg>`,
  business: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.876 10.51a9 9 0 1 0 -7.839 10.43" /><path d="M3.6 9h16.8" /><path d="M3.6 15h9.9" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.02" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>`,
  product: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12l4 3l-8 7l-8 -7l4 -3" /><path d="M12 3l-8 6l8 6l8 -6z" /><path d="M12 15h8" /></svg>`,
  news: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" /><path d="M8 8l4 0" /><path d="M8 12l4 0" /><path d="M8 16l4 0" /></svg>`,
  question: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>`,
  assets: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 3v4a1 1 0 0 0 1 1h4" /><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" /><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /></svg>`,
  career: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
  careerApply: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12h8" /><path d="M12 15h8" /><path d="M12 9h8" /><path d="M12 4v16" /></svg>`,
}

const menuItems = [
  { name: 'Overview', path: 'dashboard', icon: icons.dashboard },
  { name: 'Business', path: 'business', icon: icons.business },
  { name: 'Product', path: 'product', icon: icons.product },
  { name: 'News', path: 'news', icon: icons.news },
  { name: 'Question', path: 'question', icon: icons.question },
  { name: 'Assets', path: 'assets', icon: icons.assets },
  { name: 'Career', path: 'career', icon: icons.career },
  { name: 'Career Apply', path: 'career-apply', icon: icons.careerApply },
]
</script>
