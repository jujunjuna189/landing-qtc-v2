<template>
    <DashboardLayout>
        <div class="shadow-all bg-white-light rounded-md px-7 py-5 grow">
      <div class="flex justify-between">
        <span class="font-bold text-xl">Career Apply</span>
      </div>
      <div class="mt-5">
        <table class="w-full border-collapse">
          <thead class="bg-slate-50">
            <tr>
                <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-center w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]">No</th>
                <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Full Name</th>
                <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Email</th>
                <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Phone Number</th>
                <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Gender</th>
                <th class="border-y-[1.5px] border-white-muted px-3 py-2 text-sm font-semibold text-dark-muted text-start">Current Location</th>
                <th class="border-y-[1.5px] border-white-muted pl-3 pr-5 text-sm font-semibold text-dark-muted py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="career.length === 0" class="hover:bg-white-muted">
              <td colspan="7" class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">
                <span class="font-semibold">Data not found</span>
              </td>
            </tr>
            <tr v-for="(item, index) in career" :key="index" class="hover:bg-white-muted">
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-center">{{index + 1}}</td>
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm font-medium text-start">{{`${item.first_name} ${item.middle_name} ${item.last_name}`}}</td>
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{{item.email}}</td>
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{{item.phone_number}}</td>
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{{item.gender}}</td>
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">{{item.current_location}}</td>
                <td class="border-y-[1.5px] border-white-muted px-3 py-3 text-sm text-start">
                    <div class="flex gap-2 justify-end">
                        <DetailModal :item="item">
                            <Button class="rounded-md text-sm border border-dark-muted bg-transparent py-[6px] pl-[10px] pr-[6px] font-normal">
                                <span>Detail</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
                            </Button>
                        </DetailModal>
                        <ConfirmModal title="Confirm delete data" description="Are you sure you want to delete this data?" @onSave="(value) => onDeleteCareer(item.id)">
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
import Button from '../../../components/atoms/button/button.vue';
import ConfirmModal from '../../../components/molecules/modal/confirm-modal.vue';
import DetailModal from './components/detail-modal.vue';

export interface CareerIF {
    id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    gender: string,
    current_location: string,
}

const api = new useApi();
const career = ref<Array<CareerIF>>([]);

const getCareer = async () => {
  api.get('career-apply')
    .then((res) => {
      career.value = res.list_data.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const onDeleteCareer = (id: number) => {
  api.delete(`career-apply/${id}`).then((res) => {
    getCareer();
  }).catch((res) => {
      console.log(res);
  }).finally(() => {});
}

onMounted(() => {
    getCareer();
});

</script>