<script lang="ts" setup>
import { ShoppingTwotone } from '@vicons/antd'
import type { CSSProperties } from 'vue'

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    '--n-item-text-color': `var(--item-text-color)`,
    '--n-item-text-color-active': `var(--item-text-color-active)`,
    '--n-item-text-color-hover': `var(--item-text-color-active)`,
  }
  return styles
})
</script>

<template>
  <n-breadcrumb :style="style">
    <n-breadcrumb-item>
      <n-icon :component="ShoppingTwotone" /> 北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="ShoppingTwotone" /> 天津分行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="ShoppingTwotone" /> 平山道支行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
