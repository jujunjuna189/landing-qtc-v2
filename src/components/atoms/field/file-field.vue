<template>
    <div class="flex flex-col">
        <div class="flex items-center pr-3 grow border border-primary-dark">
            <Button class="border hover:bg-slate-100 relative text-white-light">
                <input type="file" accept="image/*" class="absolute left-0 top-0 right-0 bottom-0 border opacity-0 cursor-pointer w-full" />
                Upload File
            </Button>
            <!-- <div>
                <span>{props.value ? name : ''}</span>
            </div> -->
        </div>
        <!-- {props.error && <small class="text-danger-dark pl-1">{props.error}</small>} -->
    </div>
</template>

<script setup lang="ts">
import Button from '../button/button.vue';

</script>
