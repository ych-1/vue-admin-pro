<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useAppStore } from '@/stores/app'

const { multiTabs, multiTabsHeight } = storeToRefs(useAppStore())

const style = computed(() => {
  const styles: CSSProperties = {
    height: `${multiTabsHeight.value}px`,
  }
  return styles
})

const name = ref(1)
const { message } = useNaiveProvider()
const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
function handleClose(val: number) {
  const { value } = panels
  if (value.length === 1) {
    message?.error('最后一个了')
    return
  }
  message?.info(`关掉 ${name}`)
  const index = value.findIndex(v => val === v)
  value.splice(index, 1)
  if (name.value === val)
    name.value = value[index]
}
</script>

<template>
  <n-layout-header v-if="multiTabs" :style="style" class="flex items-center">
    <n-tabs
      v-model:value="name"
      type="card"
      closable
      tab-style="min-width: 80px;height: 32px"
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
