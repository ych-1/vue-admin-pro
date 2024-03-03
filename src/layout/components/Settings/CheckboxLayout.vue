<script setup lang="ts">
defineProps<{
  mode: 'side' | 'top' | 'mix'
  checked?: boolean
}>()
</script>

<template>
  <n-el
    class="h-64px w-64px p-1 cursor-pointer rounded box-border"
    :style="{ boxShadow: `var(--box-shadow-1)` }"
    :class="{ 'border-3 border-solid border-primary shadow-none!': checked }"
  >
    <div v-if="mode === 'side'" class="h-full flex gap-4px box-border rounded overflow-hidden">
      <div class="w-14px h-full" :style="{ backgroundColor: 'var(--primary-color)' }" />
      <div class="flex-1 flex flex-col gap-4px">
        <div class="h-14px" :style="{ backgroundColor: 'var(--primary-color)' }" />
        <div class="flex-1" :style="{ backgroundColor: 'var(--primary-color)' }" />
      </div>
    </div>
    <div v-else-if="mode === 'top'" class="h-full flex flex-col gap-4px box-border rounded overflow-hidden">
      <div class="h-14px w-full" :style="{ backgroundColor: 'var(--primary-color)' }" />
      <div class="flex-1" :style="{ backgroundColor: 'var(--primary-color)' }" />
    </div>
    <div v-else-if="mode === 'mix'" class="h-full flex flex-col gap-4px box-border rounded overflow-hidden">
      <div class="h-14px w-full" :style="{ backgroundColor: 'var(--primary-color)' }" />
      <div class="flex-1 flex gap-4px">
        <div class="w-14px" :style="{ backgroundColor: 'var(--primary-color)' }" />
        <div class="flex-1" :style="{ backgroundColor: 'var(--primary-color)' }" />
      </div>
    </div>
  </n-el>
</template>

<style scoped>

</style>
