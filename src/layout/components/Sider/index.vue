<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useAppStore } from '@/stores/app'

defineProps<{
  inverted?: boolean
}>()

const { layout, headerFixed, headerHeight, bordered, collapsed, siderWidth, siderCollapsedWidth, showTrigger } = storeToRefs(useAppStore())

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}
  if (headerFixed.value)
    styles.height = layout.value === 'side' ? '100vh' : `calc(100vh - ${headerHeight.value}px)`
  else
    styles.minHeight = layout.value === 'side' ? '100vh' : `calc(100vh - ${headerHeight.value}px)`
  return styles
})
</script>

<template>
  <n-layout-sider v-model:collapsed="collapsed" :style="style" :inverted="inverted" :native-scrollbar="false" :width="siderWidth" :collapsed-width="siderCollapsedWidth" :show-trigger="showTrigger" :bordered="bordered" collapse-mode="width">
    <slot name="default" />
  </n-layout-sider>
</template>

<style scoped>

</style>
