<script setup lang="ts">
import type { CSSProperties } from 'vue'
import HeaderActions from './HeaderActions.vue'
import UserAvatar from './UserAvatar.vue'
import { useAppStore } from '@/stores/app.ts'

const { headerHeight, bordered } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    height: `${headerHeight.value}px`,
  }
  return styles
})
</script>

<template>
  <n-layout-header :bordered="bordered" :style="styles" class="flex items-center">
    <slot />
    <div class="ml-auto" />
    <HeaderActions />
    <UserAvatar />
  </n-layout-header>
</template>

<style scoped>

</style>
