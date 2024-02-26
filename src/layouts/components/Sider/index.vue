<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useAppStore } from '@/stores/app.ts'

const { headerFixed, headerHeight, layout, bordered, collapsed, showTrigger, siderWidth, siderCollapsedWidth } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}

  if (headerFixed.value)
    styles.height = `calc(100vh - ${headerHeight.value}px)`
  else
    styles.minHeight = `calc(100vh - ${headerHeight.value}px)`

  if (headerFixed.value)
    styles.height = layout.value === 'side' ? '100vh' : `calc(100vh - ${headerHeight.value}px)`
  else
    styles.minHeight = layout.value === 'side' ? '100vh' : `calc(100vh - ${headerHeight.value}px)`

  return styles
})
</script>

<template>
  <n-layout-sider
    v-model:collapsed="collapsed"
    :bordered="bordered"
    :inverted="false"
    :show-trigger="showTrigger"
    :width="siderWidth"
    :collapsed-width="siderCollapsedWidth"
    :style="styles"
    :native-scrollbar="false"
    collapse-mode="width"
  >
    <slot />
  </n-layout-sider>
</template>

<style scoped>
</style>
