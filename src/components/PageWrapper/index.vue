<script setup lang="ts">
import type { CardProps } from 'naive-ui'
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<{
  embedded?: boolean
  padding?: number
  cardProps?: CardProps
}>(), {
  embedded: false,
  padding: 12,
})

const style = computed<CSSProperties>(() => {
  return {
    padding: `${props.padding}px`,
    minHeight: 'calc(100vh - 200px)',
  }
})
</script>

<template>
  <n-el :style="style">
    <n-card
      :embedded="embedded"
      :bordered="false"
      content-style="padding: 8px"
      v-bind="cardProps"
    >
      <slot />
    </n-card>
  </n-el>
</template>
