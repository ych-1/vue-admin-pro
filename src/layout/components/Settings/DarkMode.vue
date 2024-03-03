<script setup lang="ts">
const modelValue = defineModel<string>('value')
</script>

<template>
  <n-divider title-placement="center">
    黑暗模式
  </n-divider>
  <n-tabs v-model:value="modelValue" type="segment" pane-wrapper-class="reactive">
    <n-tab name="auto" tab="自动" />
    <n-tab name="true" tab="开启" />
    <n-tab name="false" tab="关闭" />
  </n-tabs>
</template>

<style scoped>

</style>
