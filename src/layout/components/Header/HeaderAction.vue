<script setup lang="ts">
import type { CSSProperties } from 'vue'

withDefaults(defineProps<{
  icon: string
  title?: string
  size?: number
  disabled?: boolean
}>(), {
  size: 18,
})

const emit = defineEmits(['click'])

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    color: 'var(--base-color)',
    height: `100%`,
    borderRadius: 0,
  }
  return styles
})
</script>

<template>
  <n-tooltip :disabled="disabled">
    <template #trigger>
      <n-button quaternary :focusable="false" :style="style" @click="emit('click')">
        <Icon :name="icon" :size="size" />
      </n-button>
    </template>
    {{ title }}
  </n-tooltip>
</template>

<style scoped>
:deep(.n-badge .n-badge-sup) {
  height: 14px;
  line-height: 14px;
  padding: 0 4px;
}
</style>
