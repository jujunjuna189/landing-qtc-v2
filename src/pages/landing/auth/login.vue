<template>
  <div
    class="absolute inset-0 bg-white-muted flex flex-col items-center pt-[7%]"
  >
    <!-- Logo -->
    <div class="my-4 w-72">
      <img :src="asset.lgLogo" alt="LogoQTC" class="w-full" loading="lazy" />
    </div>

    <!-- Card -->
    <div class="bg-white-light shadow-all w-96 mt-10">
      <div class="px-10 py-8">
        <!-- Header -->
        <div class="text-center">
          <span class="text-2xl font-semibold">Log In</span>
          <br/>
          <small>welcome to QTC admin</small>
        </div>

        <!-- Error Message -->
        <div v-if="error.message" class="mt-8 text-danger-dark">
          {{ error.message }}
        </div>

        <!-- Username / Email -->
        <div class="mt-3">
          <label class="block mb-1">Username/Email</label>
          <EmailField :value="controller.email"  @input="value => controller.email = value" />
        </div>

        <!-- Password -->
        <div class="mt-3">
          <label class="block mb-1">Password</label>
          <PasswordField
            id="password"
            placeholder="..."
            :error="error.password"
            v-model="controller.password"
            @input="(value) => controller.password = value"
          />
        </div>

        <!-- Submit -->
        <div class="mt-8">
          <Button
            class="w-full justify-center text-white-light"
            :disabled="loading"
            @click="onLogin"
          >
            <template #default>
              <label v-if="!loading">Log In</label>
              <CircleLoader class_cs="!border-white" v-else />
            </template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import useApi from '../../../helpers/use-api';
import asset from '../../../assets/assets';
import TextField from '../../../components/atoms/field/text-field.vue';
import Button from '../../../components/atoms/button/button.vue';
import PasswordField from '../../../components/atoms/field/password-field.vue';
import CircleLoader from '../../../components/atoms/loader/circle-loader.vue';
import { RouterName } from '../../../routes/router-name';
import { setLocalUser } from '../../../utils/storage/local-storage';
import EmailField from '../../../components/atoms/field/email-field.vue';

// --- state ---
const router = useRouter();
const api = new useApi();
const controller = reactive<{ email: string; password: string }>({
    email: '',
    password: ''
});
const error = reactive<{ message?: string; email?: string; password?: string }>({});
const loading = ref(false);

const onLogin = async () => {
    error.message = '';
    loading.value = true;
    api.post({path: 'auth/login', body: controller}).then((res) => {
        setLocalUser(res);
        router.push(RouterName.adminDashboard);
    }).catch((res) => {
        error.message = res.message;
    }).finally(() => loading.value = false);
};
</script>
