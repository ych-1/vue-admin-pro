<script setup lang="ts">
import type { CSSProperties } from 'vue'
import {
  BulbOutlined,
  BulbTwotone,
  FullscreenExitOutlined,
  FullscreenOutlined,
  SettingOutlined,
} from '@vicons/antd'
import UserAvatar from './UserAvatar.vue'
import HeaderAction from './HeaderAction.vue'
import UserMessage from './UserMessage.vue'
import { useAppStore } from '@/stores/app.ts'

const props = defineProps<{
  inverted?: boolean
}>()

const appStore = useAppStore()
const { headerHeight, bordered, settings, isDark } = storeToRefs(appStore)

const { isFullscreen, toggle } = useFullscreen()

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    height: `${headerHeight.value}px`,
  }
  if (props.inverted) {
    styles['--text-color'] = 'var(--n-text-color)'
    styles['--item-text-color'] = 'var(--n-text-color)'
    styles['--item-text-color-active'] = 'var(--n-text-color)'
  }

  return styles
})
</script>

<template>
  <n-scrollbar x-scrollable>
    <n-layout-header :bordered="bordered" :inverted="inverted" :style="styles" class="flex items-center">
      <slot />
      <div class="ml-auto" />
      <UserMessage />
      <HeaderAction title="黑暗模式" :icon="isDark ? BulbTwotone : BulbOutlined" @click="appStore.toggleTheme" />
      <HeaderAction title="全屏" :icon="isFullscreen ? FullscreenExitOutlined : FullscreenOutlined" @click="toggle" />
      <UserAvatar />
      <HeaderAction title="设置" :icon="SettingOutlined" placement="left" @click="settings = true" />
    </n-layout-header>
  </n-scrollbar>
</template>

<style scoped></style>
