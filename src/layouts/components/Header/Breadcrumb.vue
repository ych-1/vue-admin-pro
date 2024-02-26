<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'

const collapsed = defineModel<boolean>('collapsed', {
  default: false,
})
</script>

<template>
  <n-button quaternary circle class="mx-2" :focusable="false" @click="collapsed = !collapsed">
    <template #icon>
      <n-icon :size="16">
        <MenuFoldOutlined v-if="!collapsed" />
        <MenuUnfoldOutlined v-else />
      </n-icon>
    </template>
  </n-button>
</template>

<style scoped>
</style>
