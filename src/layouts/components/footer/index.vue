<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useAppStore } from '@/stores/app.ts'

const { footerHeight } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    height: `${footerHeight.value}px`,
  }
  return styles
})
</script>

<template>
  <n-layout-footer :style="styles" class="flex items-center justify-center text-gray text-12px">
    Copyright &copy; 2022 - 2024 YCH. All Rights Reserved. YCH 版权所有
  </n-layout-footer>
</template>

<style scoped>

</style>
