<script setup lang="ts">
import HeaderAction from './HeaderAction.vue'

const collapsed = defineModel<boolean>('collapsed', {
  default: false,
})
</script>

<template>
  <HeaderAction :icon="collapsed ? 'i-carbon:text-indent-more' : 'i-carbon:text-indent-less'" :disabled="true" @click="collapsed = !collapsed" />
</template>

<style scoped></style>
