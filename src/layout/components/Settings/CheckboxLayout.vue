<script setup lang="ts">
defineProps<{
  mode: 'side' | 'top' | 'mix'
  checked?: boolean
}>()
</script>

<template>
  <n-el
    class="box-border h-64px w-64px cursor-pointer rounded p-1"
    :style="{ boxShadow: `var(--box-shadow-1)` }"
    :class="{ 'border-3 border-solid border-primary shadow-none!': checked }"
  >
    <div v-if="mode === 'side'" class="box-border h-full flex gap-4px overflow-hidden rounded">
      <div class="h-full w-14px" :style="{ backgroundColor: 'var(--primary-color)' }" />
      <div class="flex flex-1 flex-col gap-4px">
        <div class="h-14px" :style="{ backgroundColor: 'var(--primary-color)' }" />
        <div class="flex-1" :style="{ backgroundColor: 'var(--primary-color)' }" />
      </div>
    </div>
    <div v-else-if="mode === 'top'" class="box-border h-full flex flex-col gap-4px overflow-hidden rounded">
      <div class="h-14px w-full" :style="{ backgroundColor: 'var(--primary-color)' }" />
      <div class="flex-1" :style="{ backgroundColor: 'var(--primary-color)' }" />
    </div>
    <div v-else-if="mode === 'mix'" class="box-border h-full flex flex-col gap-4px overflow-hidden rounded">
      <div class="h-14px w-full" :style="{ backgroundColor: 'var(--primary-color)' }" />
      <div class="flex flex-1 gap-4px">
        <div class="w-14px" :style="{ backgroundColor: 'var(--primary-color)' }" />
        <div class="flex-1" :style="{ backgroundColor: 'var(--primary-color)' }" />
      </div>
    </div>
  </n-el>
</template>

<style scoped>

</style>
