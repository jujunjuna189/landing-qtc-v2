<template>
  <LandingLayout class_nav="!sticky bg-white" :loader="isLoader">
    <div class="lg:flex lg:justify-center px-5 lg:px-0 pt-10 pb-32">
      <div class="lg:w-[30%]">
        <!-- Header -->
        <div class="flex flex-col">
          <span class="font-semibold uppercase text-primary-dark">Import Your Profile</span>
          <small>You can import your information.</small>
        </div>

        <!-- Resume Upload -->
        <div class="mt-4">
          <AreaFileField
            csClass="h-[10rem]"
            placeholder="Resume"
            :error="errors.resume"
            @change="value => onSetController({ field: 'resume', value })"
          />
        </div>

        <!-- Contact Information -->
        <div class="flex flex-col mt-4">
          <span class="font-semibold uppercase">Contact Information</span>
          <small>Please enter your contact information.</small>
        </div>

        <div class="mt-2">
          <span>First Name</span>
          <TextField :value="controller.first_name" :error="errors.first_name" @input="value => onSetController({ field: 'first_name', value })" />
        </div>
        <div class="mt-2">
          <span>Middle Name</span>
          <TextField :value="controller.middle_name" :error="errors.middle_name" @input="value => onSetController({ field: 'middle_name', value })" />
        </div>
        <div class="mt-2">
          <span>Last Name</span>
          <TextField :value="controller.last_name" :error="errors.last_name" @input="value => onSetController({ field: 'last_name', value })" />
        </div>
        <div class="mt-2">
          <span>Email</span>
          <EmailField :value="controller.email" :error="errors.email" @input="value => onSetController({ field: 'email', value })" />
        </div>
        <div class="mt-2">
          <span>Phone Number</span>
          <TextField :value="controller.phone_number" :error="errors.phone_number" @input="value => onSetController({ field: 'phone_number', value })" />
        </div>

        <!-- Diversity Info -->
        <div class="flex flex-col mt-4">
          <span class="font-semibold uppercase">Deversity Information</span>
        </div>

        <div class="mt-2">
          <span>Gender</span>
          <SelectField
            v-model="controller.gender"
            :error="errors.gender"
            :data="[
              { title: 'Laki-Laki', value: 'Laki-Laki' },
              { title: 'Perempuan', value: 'Perempuan' }
            ]"
            placeholder="Select gender"
          />
        </div>

        <div class="mt-2">
          <span>Marital Status</span>
          <SelectField
            v-model="controller.marital_status"
            :error="errors.marital_status"
            :data="[
              { title: 'Single', value: 'Single' },
              { title: 'Married', value: 'Married' }
            ]"
            placeholder="Select Marital Status"
          />
        </div>

        <!-- Address -->
        <div class="flex flex-col mt-4">
          <span class="font-semibold uppercase">Address</span>
          <small>Please enter your home address.</small>
        </div>

        <div class="mt-2">
          <span>Country</span>
          <TextField :value="controller.country" :error="errors.country" @input="value => onSetController({ field: 'country', value })" />
        </div>
        <div class="mt-2">
          <span>Province</span>
          <TextField :value="controller.province" :error="errors.province" @input="value => onSetController({ field: 'province', value })" />
        </div>
        <div class="mt-2">
          <span>City</span>
          <TextField :value="controller.city" :error="errors.city" @input="value => onSetController({ field: 'city', value })" />
        </div>
        <div class="mt-2">
          <span>Full Address</span>
          <AreaField :value="controller.address" :error="errors.address" @input="value => onSetController({ field: 'address', value })" />
        </div>
        <div class="mt-2">
          <span>Current Address</span>
          <AreaField :value="controller.current_location" :error="errors.current_location" @input="value => onSetController({ field: 'current_location', value })" />
        </div>
        <div class="mt-2">
          <span>Postal Code</span>
          <NumberField :value="controller.postal_code" :error="errors.postal_code" @input="value => onSetController({ field: 'postal_code', value })" />
        </div>

        <!-- Support Documents -->
        <div class="flex flex-col mt-4">
          <span class="font-semibold uppercase">Support Documents</span>
        </div>
        <div class="mt-4">
          <AreaFileField
            csClass="h-[10rem]"
            placeholder="Document, PDF or Other File"
            :error="errors.support_document"
            @change="value => onSetController({ field: 'support_document', value })"
          />
        </div>

        <!-- Submit -->
        <Button class="hover:bg-slate-100 relative text-white-light justify-center mt-2" @click="onSave">
          <span>Submit</span>
        </Button>
      </div>
    </div>
  </LandingLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AreaField from '../../../components/atoms/field/area-field.vue'
import TextField from '../../../components/atoms/field/text-field.vue'
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue'
import EmailField from '../../../components/atoms/field/email-field.vue'
import SelectField from '../../../components/atoms/field/select-field.vue'
import FileField from '../../../components/atoms/field/file-field.vue'
import Button from '../../../components/atoms/button/button.vue'
import AreaFileField from '../../../components/atoms/field/area-file-field.vue'
import NumberField from '../../../components/atoms/field/number-field.vue'
import { useRoute } from 'vue-router'
import useApi from '../../../helpers/use-api'


const api = new useApi();
const isLoader = ref<boolean>();
const route = useRoute();

const controller = reactive({
    career_id: route.params.id,
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    gender: '',
    marital_status: '',
    country: '',
    province: '',
    city: '',
    address: '',
    current_location: '',
    postal_code: '',
    resume: null,
    support_document: null,
})

const errors = reactive({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    gender: '',
    marital_status: '',
    country: '',
    province: '',
    city: '',
    address: '',
    current_location: '',
    postal_code: '',
    resume: '',
    support_document: '',
})

const clear = () => {
    Object.assign(controller, {
        career_id: route.params.id,
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        gender: '',
        marital_status: '',
        country: '',
        province: '',
        city: '',
        address: '',
        current_location: '',
        postal_code: '',
        resume: null,
        support_document: null,
    });
}

const onSetController = ({ field, value }: { field: string, value: any }) => {
  controller[field] = value
  errors[field] = '' // Reset error saat diedit
}

const validateForm = () => {
  let valid = true
  for (const key in controller) {
    if (
      controller[key] === '' ||
      controller[key] === null ||
      controller[key] === undefined
    ) {
      errors[key] = 'This field is required'
      valid = false
    } else {
      errors[key] = ''
    }
  }
  return valid
}

const onSave = () => {
    if (!validateForm()) {
        console.log('Validation failed')
        return
    }

    var dataBatch = { ...controller };
    dataBatch.gender = controller?.gender?.['value'];
    dataBatch.marital_status = controller?.marital_status?.['value'];
    isLoader.value = true;
    api.post({path: `career-apply`, body: dataBatch}, true).then((res) => {        
        clear();
    }).finally(() => isLoader.value = false);
}
</script>
