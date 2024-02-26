<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useAppStore } from '@/stores/app.ts'

const { headerHeight, headerFixed, tabsFixed, tabsHeight } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}
  if (headerFixed.value)
    styles.height = `calc(100vh - ${headerHeight.value}px)`
  else
    styles.minHeight = `calc(100vh - ${headerHeight.value}px)`
  return styles
})

const contentStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}
  if (headerFixed.value && tabsFixed.value)
    styles.height = `calc(100vh - ${headerHeight.value + tabsHeight.value}px)`
  else
    styles.minHeight = `calc(100vh - ${headerHeight.value + tabsHeight.value}px)`
  return styles
})
</script>

<template>
  <n-layout :native-scrollbar="false" :embedded="true" :style="styles">
    <slot name="prefix">
      prefix
    </slot>
    <n-layout-content :native-scrollbar="false" :embedded="true" :style="contentStyles">
      <slot />
      <slot name="suffix">
        suffix
      </slot>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
