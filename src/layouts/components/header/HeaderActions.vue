<script setup lang="ts">
import { AlertFilled, AlertOutlined, CompressOutlined, ExpandOutlined, SettingOutlined } from '@vicons/antd'
import { useFullscreen } from '@vueuse/core'
import { useAppStore } from '@/stores/app.ts'

interface ActionItem {
  key: string
  title: string
  icon: any
  onClick: () => void
}

const { isFullscreen, toggle } = useFullscreen()
const appStore = useAppStore()
const { dark } = storeToRefs(appStore)

const list = computed<ActionItem[]>(() => [
  {
    key: 'theme',
    title: '主题',
    icon: dark.value ? AlertOutlined : AlertFilled,
    onClick: () => {
      appStore.toggleTheme()
    },
  },
  {
    key: 'fullscreen',
    title: '全屏',
    icon: isFullscreen.value ? CompressOutlined : ExpandOutlined,
    onClick: () => {
      toggle()
    },
  },
  {
    key: 'setting',
    title: '设置',
    icon: SettingOutlined,
    onClick: () => {
    },
  },
])
</script>

<template>
  <n-tooltip v-for="item in list" :key="item.key">
    <template #trigger>
      <n-button quaternary circle :focusable="false" class="action-button" @click="item.onClick">
        <template #icon>
          <n-icon :size="16" :component="item.icon" />
        </template>
      </n-button>
    </template>
    {{ item.title }}
  </n-tooltip>
</template>

<style scoped>
.action-button {
  margin: 0 0.375rem;
  color: var(--base-color);
}

.action-button:hover {
  color: var(--base-color);
}
</style>
