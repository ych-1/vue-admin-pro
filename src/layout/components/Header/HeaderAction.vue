<script setup lang="ts">
import type { CSSProperties, Component } from 'vue'

withDefaults(defineProps<{
  icon: Component
  title?: string
  size?: number
  disabled?: boolean
  placement?: 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'
}>(), {
  size: 18,
})

const emit = defineEmits(['click'])

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    color: 'var(--text-color)',
    height: `100%`,
    borderRadius: 0,
    padding: '0 12px',
  }
  return styles
})
</script>

<template>
  <n-tooltip :disabled="disabled" :placement="placement">
    <template #trigger>
      <n-button quaternary :focusable="false" :style="style" @click="emit('click')">
        <template #icon>
          <n-icon :size="size" :component="icon" />
        </template>
      </n-button>
    </template>
    {{ title }}
  </n-tooltip>
</template>
