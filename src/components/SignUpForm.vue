<script setup lang="ts">
import { ref } from "vue";
import InputText from "./InputText.vue";
const userId = ref("");
const name = ref("");
const organization = ref("");
const handleSubmit = () => {
  alert(`User ID: ${userId.value}
Name: ${name.value}
Organization: ${organization.value}`);
};
</script>

<template>
  <form class="flex flex-col gap-4 py-4" @submit.prevent="handleSubmit">
    <InputText label="User ID" v-model="userId" />
    <InputText label="Name" v-model="name" />
    <InputText label="Organization" v-model="organization" />
    <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
  </form>
</template>
