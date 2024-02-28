<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { BellOutlined, CompressOutlined, ExpandOutlined, SettingOutlined } from '@vicons/antd'
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
      <HeaderAction title="消息" :icon="BellOutlined" :size="20" @click="toggle" />
      <HeaderAction title="全屏" :icon="isFullscreen ? CompressOutlined : ExpandOutlined" @click="toggle" />
      <UserAvatar />
      <HeaderAction title="设置" :icon="SettingOutlined" :size="18" @click="settings = true" />
    </n-layout-header>
  </n-scrollbar>
</template>

<style scoped></style>
