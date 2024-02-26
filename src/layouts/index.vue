<script setup lang="ts">
import {
  AppMain,
  Breadcrumb,
  Footer,
  Header,
  Logo,
  Menu,
  MultiTab,
  Sider,
} from './components'
import { useAppStore } from '@/stores/app.ts'

const appStore = useAppStore()
const { layout, collapsed } = storeToRefs(appStore)
</script>

<template>
  <n-layout embedded :native-scrollbar="false" class="h-screen" :has-sider="layout === 'side'">
    <template v-if="layout === 'side'">
      <Sider>
        <Logo :collapsed="collapsed" />
        <Menu />
      </Sider>
    </template>
    <template v-else-if="layout === 'top' || layout === 'mix'">
      <Header>
        <Logo />
        <Breadcrumb v-if="layout === 'mix'" v-model:collapsed="collapsed" />
        <Menu v-if="layout === 'top'" mode="horizontal" />
      </Header>
    </template>
    <n-layout embedded :native-scrollbar="false" :has-sider="layout === 'mix'">
      <template v-if="layout === 'side'">
        <Header>
          <Breadcrumb v-model:collapsed="collapsed" />
        </Header>
      </template>
      <template v-else-if=" layout === 'mix'">
        <Sider>
          <Menu />
        </Sider>
      </template>
      <AppMain>
        <template #prefix>
          <MultiTab />
        </template>
        <router-view />
        <template #suffix>
          <Footer />
        </template>
      </AppMain>
    </n-layout>
  </n-layout>
</template>
