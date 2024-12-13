<script setup lang="ts">
type InputTextProps = {
  label: string;
};
const model = defineModel<string>();
defineProps<InputTextProps>();
</script>

<template>
  <label class="flex flex-col gap-4">
    {{ label }}
    <input
      class="border-blue-400 border rounded-md h-10 px-4"
      type="text"
      autocomplete="off"
      v-model="model"
    />
  </label>
</template>
