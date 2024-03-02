<script setup lang="ts">
const { color, size } = withDefaults(defineProps<{
  name: string
  color?: string
  size?: number | string
}>(), {
  size: 16,
})
</script>

<template>
  <n-icon :size="size" :color="color">
    <i :class="name" />
  </n-icon>
</template>

<style scoped>

</style>
