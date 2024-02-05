<script setup lang="ts">
import { deleteDemoApi, getDemoApi, postDemoApi, putDemoApi } from '@/api/system/demo.ts'

async function onClick() {
  getDemoApi()
  putDemoApi()
  postDemoApi()
  deleteDemoApi()
}
</script>

<template>
  <div class="bg-red w-200px h-200px" @click="onClick">
    测试
  </div>
  <router-view />
</template>

<style scoped>

</style>
