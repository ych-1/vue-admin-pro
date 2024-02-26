<script setup lang="ts">
import { useAppStore } from '@/stores/app.ts'

const { theme, locale, dateLocale, themeOverrides } = storeToRefs(useAppStore())
</script>

<template>
  <n-config-provider
    :abstract="true"
    :date-locale="dateLocale"
    :inline-theme-disabled="true"
    :locale="locale"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <n-global-style />
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
