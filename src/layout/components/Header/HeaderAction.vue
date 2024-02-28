<script setup lang="ts">
import type { CSSProperties, Component } from 'vue'

const { x, round } = withDefaults(defineProps<{
  icon: Component
  title?: string
  size?: number
  disabled?: boolean
  x?: number
  round?: boolean
  badge?: number
}>(), {
  size: 16,
  disabled: false,
  x: 24,
  round: false,
})

const emit = defineEmits(['click'])

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    color: 'var(--base-color)',
  }
  if (round) {
    styles.padding = `0`
    styles.margin = `0 ${x}px`
  }
  else {
    styles.height = `100%`
    styles.borderRadius = 0
  }
  return styles
})
</script>

<template>
  <n-tooltip :disabled="disabled">
    <template #trigger>
      <n-button quaternary :circle="round" :focusable="false" :style="style" @click="emit('click')">
        <template #icon>
          <n-icon :size="size" :component="icon" />
        </template>
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
