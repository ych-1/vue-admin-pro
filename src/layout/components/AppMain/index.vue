<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'

const { headerHeight, headerFixed, multiTabs, multiTabsHeight, multiTabsFixed } = storeToRefs(useAppStore())

const style = computed(() => {
  const styles: CSSProperties = {
    [headerFixed.value ? 'height' : 'min-height']:
      `calc(100vh - ${headerHeight.value}px)`,
  }
  return styles
})

const contentStyle = computed(() => {
  const styles: CSSProperties = {
    [multiTabsFixed.value ? 'height' : 'min-height']:
      `calc(100vh - ${headerHeight.value + (multiTabs.value ? multiTabsHeight.value : 0)}px)`,
  }
  return styles
})
</script>

<template>
  <n-layout embedded :native-scrollbar="false" :style="style">
    <slot name="prefix" />

    <n-layout-content embedded :native-scrollbar="false" :style="contentStyle">
      <slot />
      <slot name="suffix" />
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
