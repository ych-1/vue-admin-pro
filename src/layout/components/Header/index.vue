<script setup lang="ts">
import type { CSSProperties } from 'vue'
import UserAvatar from './UserAvatar.vue'
import { useAppStore } from '@/stores/app.ts'
import HeaderAction from '@/layout/components/Header/HeaderAction.vue'

defineProps<{
  inverted?: boolean
}>()

const { headerHeight, bordered, settings } = storeToRefs(useAppStore())

const { isFullscreen, toggle } = useFullscreen()

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    height: `${headerHeight.value}px`,
  }
  return styles
})
</script>

<template>
  <n-scrollbar x-scrollable>
    <n-layout-header :bordered="bordered" :inverted="inverted" :style="styles" class="flex items-center">
      <slot />
      <div class="ml-auto" />
      <HeaderAction title="消息" icon="i-carbon:notification" @click="toggle" />
      <HeaderAction title="全屏" :icon="isFullscreen ? 'i-carbon:intent-request-scale-in' : 'i-carbon:intent-request-scale-out'" @click="toggle" />
      <UserAvatar />
      <HeaderAction title="设置" icon="i-carbon:settings" @click="settings = true" />
    </n-layout-header>
  </n-scrollbar>
</template>

<style scoped></style>
