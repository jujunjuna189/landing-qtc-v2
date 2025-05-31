<template>
    <div class="py-10 lg:py-20 relative">
        <SpiralAnimate :width="900" :height="450" :scale="900" :positionX="400" :positionY="-150" :style="{right: 0, top: 0}" />
        <div class="px-5 lg:px-32">
            <span class="text-base lg:text-2xl text-primary-dark font-semibold">{{language[2]}}</span>
            <div class="w-12 h-1 bg-secondary-dark" />
        </div>
        <div class="lg:grid lg:grid-cols-2 px-5 lg:px-32 mt-5 lg:mt-12">
            <div class="lg:pr-20 lg:flex lg:flex-col">
                <div class="flex flex-col gap-10">
                    <span class="text-sm lg:text-base text-primary-dark">
                        {{language[3]}}
                    </span>
                    <span class="text-sm lg:text-base text-primary-dark font-semibold">
                        {{language[4]}}
                    </span>
                </div>
                <div class="mt-5 lg:mt-28 lg:mb-16 lg:grow bg-primary-dark py-5 lg:py-10 px-5 lg:px-10">
                    <span class="text-base lg:text-xl text-white-light font-semibold">{{language[5]}}</span>
                    <div class="w-12 h-1 bg-secondary-dark" />
                    <hr class="my-5 lg:my-10 border-gray-dark" />
                    <div class="">
                        <span class="text-base lg:text-xl text-white-light font-semibold">{{language[6]}}</span>
                        <div class="flex gap-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-white-light w-20" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" /><path d="M9 4v13" /><path d="M15 7v5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
                            <span class="text-sm lg:text-base text-white-light">
                                Jl. Wijaya I No.71, RT.10/RW.1,
                                Petogogan, Kec. Kby. Baru,  Kota Jakarta Selatan,
                                Daerah Khusus Ibukota Jakarta, 12170
                            </span>
                        </div>
                        <div class="flex gap-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-white-light" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            <span class="text-sm lg:text-base text-white-light">
                                +62 813 0323 5001
                            </span>
                        </div>
                    </div>
                    <hr class="my-5 lg:my-10 border-gray-dark" />
                    <span class="text-base lg:text-xl text-white-light font-semibold">{{language[7]}}</span>
                    <div class="mt-5 flex gap-3">
                        <a class="rounded-full bg-primary-muted w-10 h-10 flex justify-center items-center" href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@quantumtranscapital.com&su=&body=" target="_blank">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="text-slate-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                        </a>
                        <a class="rounded-full bg-primary-muted w-10 h-10 flex justify-center items-center" href="https://www.linkedin.com/company/pt-quantum-trans-capital/" target="_blank">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="text-slate-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-5 lg:mt-0">
                <span class="text-base font-semibold text-primary-dark">
                    {{language[8]}}
                </span>
                <div class="mt-10">
                    <div class="flex gap-3">
                        <div class="grow">
                            <span class="uppercase text-primary-dark">{{language[9]}} <span class="text-danger-dark">*</span></span>
                            <TextField value="" />
                        </div>
                        <div class="grow">
                            <span class="uppercase text-primary-dark">{{language[10]}} <span class="text-danger-dark">*</span></span>
                            <TextField value="" />
                        </div>
                    </div>
                    <div class="flex gap-3 mt-8">
                        <div class="grow">
                            <span class="uppercase text-primary-dark">{{language[11]}} <span class="text-danger-dark">*</span></span>
                            <TextField value="" />
                        </div>
                        <div class="grow">
                            <span class="uppercase text-primary-dark">{{language[12]}} <span class="text-danger-dark">*</span></span>
                            <TextField value="" />
                        </div>
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-primary-dark">{{language[13]}} <span class="text-danger-dark">*</span></span>
                        <TextField value="" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-primary-dark">{{language[14]}}</span>
                        <FileField value="" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-primary-dark">{{language[15]}}</span>
                        <TextField value="" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-primary-dark">{{language[16]}}</span>
                        <AreaField value="" />
                    </div>
                    <div class="mt-5 flex justify-end">
                        <Button>
                            <span class="text-white-light uppercase">{{language[18]}}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '../../../../components/atoms/button/button.vue';
import AreaField from '../../../../components/atoms/field/area-field.vue';
import FileField from '../../../../components/atoms/field/file-field.vue';
import TextField from '../../../../components/atoms/field/text-field.vue';
import { RouterName } from '../../../../routes/router-name';
import landingLanguage from '../../../../utils/language/landing-language';
import { getLocalLanguage } from '../../../../utils/storage/local-storage';
import asset from '../../../../assets/assets';
import SpiralAnimate from '../../../../components/molecules/animate/spiral-animate.vue';

const router = useRouter();
const language = landingLanguage[getLocalLanguage().key][RouterName.contact];
</script>