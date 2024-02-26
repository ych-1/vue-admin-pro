<script setup lang="ts">
import { AlertFilled, AlertOutlined, CompressOutlined, ExpandOutlined } from '@vicons/antd'
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
])
</script>

<template>
  <n-flex>
    <n-button v-for="item in list" :key="item.key" quaternary circle :focusable="false" @click="item.onClick">
      <template #icon>
        <n-icon :size="16" :component="item.icon" />
      </template>
    </n-button>
  </n-flex>
</template>

<style scoped>

</style>
