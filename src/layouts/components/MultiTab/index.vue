<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.ts'

const { tabsHeight } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    height: `${tabsHeight.value}px`,
    boxSizing: 'border-box',
  }
  return styles
})

const name = ref('')
const panels = ref(Array.from({ length: 20 }, (_, i) => `标签页：${i}`))
function handleClose(val: any) {
  const { value: panel } = panels
  if (panel.length === 1) {
    window.$message?.error('最后一个了')
    return
  }
  window.$message?.info(`关掉 ${name.value}`)
  const index = panel.findIndex(v => name.value === v)
  panel.splice(index, 1)
  if (name.value === val)
    name.value = panel[index]
}
</script>

<template>
  <n-layout-header :style="styles" class="flex items-center">
    <n-tabs
      v-model:value="name"
      :closable="true"
      type="card"
      size="small"
      tab-style="padding: 0px 12px;height: 32px"
      @close="handleClose"
    >
      <n-tab
        v-for="panel in panels"
        :key="panel"
        :tab="panel.toString()"
        :name="panel"
      >
        {{ panel }}
      </n-tab>
      <template #prefix>
        <div />
      </template>
      <template #suffix>
        <div />
      </template>
    </n-tabs>
  </n-layout-header>
</template>

<style scoped>
</style>
