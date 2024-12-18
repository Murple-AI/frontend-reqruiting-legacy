<script setup lang="ts">
import { computed, ref, nextTick } from 'vue';

type InputTextProps = {
  label: string;
  required: boolean;
  elementId: string;
};

const model = defineModel<string>();
const { elementId } = defineProps<InputTextProps>(); // 개별 input element에 focus를 하기 위해 id를 props르 받아옴

const isFocus = ref(false); // focus 여부 판별 flag
const isValue = computed(() => Boolean(model.value)); // input에 글이 작성되어 있는지 판별하는 flag
const isClick = ref(false); // input의 blur 이벤트가 delete 버튼 클릭에 의한 것인지 판별하는 flag

const handleFocus = () => {
  isFocus.value = true;
};

const handleBlur = () => {
  // blur 이벤트가 click 이벤트보다 먼저 이루어지므로
  // handleDeleteClick가 실행 될 수 있도록 지연 실행
  setTimeout(() => {
    // input blur가 delete button 클릭에 의한 것인지 아닌지 확인. 클릭에 의한 거면 isFocus 유지
    if (isClick.value) {
      isClick.value = false;
    } else {
      isFocus.value = false;
    }
  }, 250);
};

const handleDeleteClick = () => {
  isClick.value = true;
  model.value = '';

  // 컴포넌트가 mounted 된 후 포커스
  nextTick(() => {
    document.getElementById(elementId)?.focus();
  });
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
        :id="elementId"
        @focus="handleFocus"
        @blur="handleBlur"
        class="border-gray-400 border rounded-md h-10 pl-4 pr-10 hover:border-blue-400 invalid:border-red-500 focus:border-green-400 focus:outline-none w-full"
        type="text"
        autocomplete="off"
        v-model="model"
      />
      <button
        v-if="isFocus && isValue"
        type="button"
        class="absolute top-[10px] right-[10px] bg-black w-[20px] h-[20px] text-white flex items-center justify-center cursor-pointer rounded-full opacity-50"
        @click="handleDeleteClick"
      >
        X
      </button>
    </div>
  </label>
</template>
