<script setup lang="ts">
import { layoutHeaderProps } from 'naive-ui'

const props = defineProps({
  ...layoutHeaderProps,
  height: {
    type: String,
    default: '50px',
  },
})
</script>

<template>
  <n-layout-header v-bind="props" :style="{ height }" bordered>
    <slot />
  </n-layout-header>
</template>

<style scoped>

</style>
