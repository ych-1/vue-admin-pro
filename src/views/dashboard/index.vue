<script setup lang="ts">
import { useAppStore } from '@/stores/app.ts'

const { headerFixed, tabsFixed, layout } = storeToRefs(useAppStore())

const layoutOptions = [
  { label: 'Side', value: 'side' },
  { label: 'Top', value: 'top' },
  { label: 'Mix', value: 'mix' },
]
</script>

<template>
  <PageWrapper>
    <h1>
      Dashboard
    </h1>
    Header Fixed:<n-switch v-model:value="headerFixed" />
    Tabs Fixed: <n-switch v-model:value="tabsFixed" />
    <n-select v-model:value="layout" :options="layoutOptions" />

    <div v-for="i in 20" :key="i" class="h-50px">
      占位{{ i }}
    </div>
  </PageWrapper>
</template>

<style scoped>

</style>
