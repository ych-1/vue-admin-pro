<script setup lang="ts">
import { NThemeEditor } from 'naive-ui'
import { useAppStore } from '@/stores'

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
    <NThemeEditor>
      <app-provider>
        <router-view />
      </app-provider>
    </NThemeEditor>
  </n-config-provider>
</template>

<style scoped>

</style>
