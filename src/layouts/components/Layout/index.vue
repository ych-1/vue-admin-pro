<script setup lang="ts">
import { layoutProps } from 'naive-ui'

const props = defineProps({
  ...layoutProps,
  height: {
    type: String,
    default: 'auto',
  },
})
</script>

<template>
  <n-layout v-bind="props" :native-scrollbar="false" :embedded="true" :content-style="{ height }">
    <slot />
  </n-layout>
</template>
