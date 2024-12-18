<script setup lang="ts">
import { computed, ref } from 'vue';
import InputText from './InputText.vue';
import ValidationText from './ValidationText.vue';
import {
  getNameValidationText,
  getOrganizationValidationText,
  getUserIdValidationText,
} from '@/utils/validations';

const userId = ref('');
const name = ref('');
const organization = ref('');

const userIdValidationText = computed(() =>
  getUserIdValidationText(userId.value)
);
const nameValidationText = computed(() => getNameValidationText(name.value));
const organizationValidationText = computed(() =>
  getOrganizationValidationText(organization.value)
);

const isValid = computed(() => {
  return (
    userIdValidationText.value === '' &&
    nameValidationText.value === '' &&
    organizationValidationText.value === ''
  );
});

const handleSubmit = () => {
  if (!isValid.value) {
    return;
  }

  alert(`User ID: ${userId.value}
  Name: ${name.value}
  Organization: ${organization.value}`);
};
</script>

<template>
  <form class="flex flex-col gap-4 py-4" @submit.prevent="handleSubmit">
    <div>
      <InputText label="User ID" v-model="userId" :required="true" />
      <ValidationText :text="userIdValidationText" />
    </div>
    <div>
      <InputText label="Name" v-model="name" :required="true" />
      <ValidationText :text="nameValidationText" />
    </div>
    <div>
      <InputText
        label="Organization"
        v-model="organization"
        :required="false"
      />
      <ValidationText :text="organizationValidationText" />
    </div>

    <button
      :class="[
        isValid
          ? 'bg-blue-500 cursor-pointer'
          : 'bg-gray-400 cursor-not-allowed',
        'text-white px-4 py-2 rounded-md',
      ]"
    >
      Submit
    </button>
  </form>
</template>
