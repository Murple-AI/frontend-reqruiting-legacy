<script setup lang="ts">
type InputTextProps = {
  label: string;
};
const model = defineModel<string>();
defineProps<InputTextProps>();

const handleDeleteClick = () => {
  console.log('/');
};
</script>

<template>
  <label class="flex flex-col gap-4">
    {{ label }}
    <div class="relative">
      <input
        class="border-gray-400 border rounded-md h-10 px-4 hover:border-blue-400 invalid:border-red-500 focus:border-green-400 focus:outline-none w-full"
        type="text"
        autocomplete="off"
        v-model="model"
      />
      <div
        class="absolute top-[10px] right-[10px] bg-black w-[20px] h-[20px] text-white flex items-center justify-center cursor-pointer rounded-full opacity-50"
        @click="handleDeleteClick"
      >
        X
      </div>
    </div>
  </label>
</template>
