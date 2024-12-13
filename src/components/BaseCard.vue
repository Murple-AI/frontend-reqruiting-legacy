<template>
  <div class="rounded-lg shadow-lg bg-white p-4 w-[480px]">
    <header class="text-2xl font-semibold">
      <slot name="title" />
    </header>
    <slot name="content" />
  </div>
</template>
