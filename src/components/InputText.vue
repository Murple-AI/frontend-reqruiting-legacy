<script setup lang="ts">
import { computed, ref } from "vue";

type InputTextProps = {
  label: string;
  invalid?: boolean | ((value: string) => boolean);
};

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<string>();

const isTouched = ref(false);

const props = withDefaults(defineProps<InputTextProps>(), {
  invalid: () => false,
});

const isInvalid = computed(() => {
  if (!isTouched.value) return false;

  if (typeof props.invalid === "function") {
    return props.invalid(model.value || "");
  }

  return props.invalid;
});

const handleBlur = () => {
  isTouched.value = true;
};
</script>

<template>
  <label class="flex flex-col gap-4">
    {{ label }}
    <input
      class="border-gray-400 border rounded-md h-10 px-4 hover:border-blue-400 focus:border-green-400 focus:outline-none"
      :class="{
        'border-red-500': isInvalid,
        'focus:border-red-500': isInvalid,
      }"
      type="search"
      autocomplete="off"
      @blur="handleBlur"
      v-model="model"
      v-bind="$attrs"
    />
  </label>
</template>
