<script setup lang="ts">
import { layoutSiderProps } from 'naive-ui'

const props = defineProps({
  ...layoutSiderProps,
})
</script>

<template>
  <n-layout-sider v-bind="props" bordered>
    <slot />
  </n-layout-sider>
</template>

<style scoped>

</style>
