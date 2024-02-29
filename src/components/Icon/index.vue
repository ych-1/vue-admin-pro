<script setup lang="ts">
import type { CSSProperties } from 'vue'

const { color, size } = withDefaults(defineProps<{
  name: string
  color?: string
  size?: number
}>(), {
  size: 16,
})

const style = computed<CSSProperties>(() => {
  return {
    color,
    fontSize: `${size}px`,
  }
})
</script>

<template>
  <i :class="name" :style="style" />
</template>

<style scoped>

</style>
