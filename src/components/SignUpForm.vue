<script setup lang="ts">
import { ref, computed } from "vue";
import InputText from "./InputText.vue";
const userId = ref("");
const name = ref("");
const organization = ref("");
const isAlphanumeric = (value: string) => /^[A-Za-z0-9]+$/.test(value);
const hasInvalidChars = (value: string) => {
  const invalidChars = ["\\", "/", ":", "*", "?", '"', "<", ">", "|"];
  return invalidChars.some((char) => value.includes(char));
};
const isFormValid = computed(() => {
  return (
    userId.value.length > 0 &&
    isAlphanumeric(userId.value) &&
    name.value.length > 0 &&
    !hasInvalidChars(name.value)
  );
});
const errors = computed(() => {
  const errorMessages = [];
  if (userId.value.length === 0) {
    errorMessages.push("User ID is required");
  } else if (!isAlphanumeric(userId.value)) {
    errorMessages.push("User ID must be alphanumeric");
  }
  if (name.value.length === 0) {
    errorMessages.push("Name is required");
  } else if (hasInvalidChars(name.value)) {
    errorMessages.push("Name contains invalid characters");
  }
  if (organization.value.length > 0 && hasInvalidChars(organization.value)) {
    errorMessages.push("Organization contains invalid characters");
  }
  return errorMessages;
});
const handleSubmit = () => {
  if (isFormValid.value) {
    alert(
      `User ID: ${userId.value} Name: ${name.value} Organization: ${organization.value}`
    );
  } else {
    alert(`Invalid form submission! ${errors.value}`);
  }
};
</script>

<template>
  <form class="flex flex-col gap-4 py-4" @submit.prevent="handleSubmit">
    <InputText
      label="User ID"
      v-model="userId"
      :invalid="(value) => value.length === 0 || !isAlphanumeric(value)"
      required
    />
    <InputText
      label="Name"
      v-model="name"
      :invalid="(value) => value.length === 0 || hasInvalidChars(value)"
      required
    />
    <InputText
      label="Organization"
      v-model="organization"
      :invalid="(value) => hasInvalidChars(value)"
    />

    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Submit
    </button>
  </form>
</template>
