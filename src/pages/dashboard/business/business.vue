<template>
    <DashboardLayout>
        <div class="shadow-all bg-white-light rounded-md px-7 py-5 grow">
      <div class="flex justify-between">
        <span class="font-bold text-xl">Business</span>
        <CreateModal @onSave="getBusiness" />
      </div>
      <div class="mt-5">
        <table class="w-full border-collapse">
          <thead class="bg-slate-50">
            <tr>
              <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem]">No</th>
              <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start w-[5rem]">Logo</th>
              <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Name</th>
              <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Redirect</th>
              <th class="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="business.length === 0" class="hover:bg-white-muted">
              <td colspan="5" class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">
                <span class="font-semibold">Data not found</span>
              </td>
            </tr>
            <tr v-for="(item, index) in business" :key="index" class="hover:bg-white-muted">
              <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">{{ index + 1 }}</td>
              <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">
                <div class="w-14 min-w-14 max-w-14 rounded-md">
                  <img :src="item.logo" alt="Logo" />
                </div>
              </td>
              <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm font-medium text-start">{{ item.name }}</td>
              <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{{ item.redirect }}</td>
              <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">
                <div class="flex gap-2 justify-end">
                  <UpdateModal :item="item" @onSave="getBusiness" />
                  <ConfirmModal title="Confirm delete data" description="Are you sure you want to delete this data?" @onSave="(value) => onDeleteBusiness(item.id)">
                    <Button class="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal flex">
                      <span>Delete</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                        <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
                      </svg>
                    </Button>
                  </ConfirmModal>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DashboardLayout from '../../../components/molecules/layout/dashboard-layout.vue';
import useApi from '../../../helpers/use-api';
import CreateModal from './components/create-modal.vue';
import UpdateModal from './components/update-modal.vue';
import ConfirmModal from '../../../components/molecules/modal/confirm-modal.vue';
import Button from '../../../components/atoms/button/button.vue';

export interface BusinessIF {
    id: number,
    logo: string,
    name: string,
    description: string,
    redirect: string,
}

const api = new useApi();
const business = ref<Array<BusinessIF>>([]);

const getBusiness = async () => {
  api.get('business')
    .then((res) => {
      business.value = res.list_data.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const onDeleteBusiness = (id: number) => {
  api.delete(`business/${id}`).then((res) => {
    getBusiness();
  }).catch((res) => {
      console.log(res);
  }).finally(() => {});
}

onMounted(() => {
    getBusiness();
});

</script>