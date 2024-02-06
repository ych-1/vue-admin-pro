<script setup lang="ts">
import { useUserStore } from '@/stores/user.ts'

const { hasPermission } = usePermission()
const userStore = useUserStore()
async function onClick() {
  userStore.userInfo.permissions = ['system:demo:delete']
  console.log(hasPermission('system:demo:delete'))
}
</script>

<template>
  <n-config-provider
    :abstract="true"
    :date-locale="null"
    :inline-theme-disabled="true"
    :locale="null"
    :preflight-style-disabled="true"
    :theme="null"
    :theme-overrides="null"
  >
    <n-global-style />
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
