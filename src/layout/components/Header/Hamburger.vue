<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import HeaderAction from './HeaderAction.vue'

const collapsed = defineModel<boolean>('collapsed', {
  default: false,
})
</script>

<template>
  <HeaderAction :icon="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" :disabled="true" @click="collapsed = !collapsed" />
</template>

<style scoped></style>
