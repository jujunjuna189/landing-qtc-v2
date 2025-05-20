<template>
    <div class="font-semibold py-2 px-5 bg-primary-dark flex items-center gap-2 cursor-pointer" :class="class_cs">
        <slot />
    </div>
</template>

<script lang="ts" setup>
interface PropsIF {
    id?: string;
    placeholder?: string | undefined;
    class_cs?: string | undefined;
}

const props: PropsIF = defineProps({
    id: { type: String, default: "id" },
    placeholder: {
        type: String,
        default: ""
    },
    class_cs: {
        type: String,
        default: "",
    },
});
</script>