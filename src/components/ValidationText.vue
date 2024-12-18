<script setup lang="ts">
type ValidationTextProps = {
  text: string;
};

defineProps<ValidationTextProps>();
</script>

<template>
  <div class="w-full mt-1">
    <span class="text-red-500">{{ text }}</span>
  </div>
</template>
