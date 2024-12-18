<script setup lang="ts">
type InputTextProps = {
  label: string;
  required: boolean;
};

const model = defineModel<string>();
defineProps<InputTextProps>();

const handleDeleteClick = () => {
  model.value = '';
};
</script>

<template>
  <label class="flex flex-col gap-4">
    <div class="flex">
      <span>{{ label }}</span>
      <span v-if="required" class="text-red-500 ml-[2px]">*</span>
    </div>
    <div class="relative">
      <input
        ref="input"
        class="border-gray-400 border rounded-md h-10 pl-4 pr-10 hover:border-blue-400 invalid:border-red-500 focus:border-green-400 focus:outline-none w-full"
        type="text"
        autocomplete="off"
        v-model="model"
      />
      <button
        type="button"
        class="absolute top-[10px] right-[10px] bg-black w-[20px] h-[20px] text-white flex items-center justify-center cursor-pointer rounded-full opacity-50"
        @click="handleDeleteClick"
      >
        X
      </button>
    </div>
  </label>
</template>
