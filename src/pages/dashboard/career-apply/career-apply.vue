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
  api.delete(`career/${id}`).then((res) => {
    getCareer();
  }).catch((res) => {
      console.log(res);
  }).finally(() => {});
}

onMounted(() => {
    getCareer();
});

</script>