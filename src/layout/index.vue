<script setup lang='ts'>
import { AppMain, Breadcrumb, Footer, Header, Logo, Menu, MultiTab, Settings, Sider } from './components'
import { useAppStore } from '@/stores/app'

const { layout, inverted, collapsed, settings } = storeToRefs(useAppStore())
</script>

<template>
  <n-layout class="h-screen" embedded :native-scrollbar="false" :has-sider="layout === 'side'">
    <template v-if="layout === 'side'">
      <Sider :inverted="inverted">
        <Logo :collapsed="collapsed" />
        <Menu :inverted="inverted" mode="vertical" />
      </Sider>
    </template>
    <template v-if="layout === 'top' || layout === 'mix'">
      <Header :inverted="inverted">
        <Logo />
        <Breadcrumb v-if="layout === 'mix'" v-model:collapsed="collapsed" />
        <Menu v-if="layout === 'top'" mode="horizontal" :inverted="inverted" />
      </Header>
    </template>
    <n-layout embedded :native-scrollbar="false" :has-sider="layout === 'mix'">
      <template v-if="layout === 'side'">
        <Header>
          <Breadcrumb v-model:collapsed="collapsed" />
        </Header>
      </template>
      <template v-if="layout === 'mix'">
        <Sider>
          <Menu mode="vertical" />
        </Sider>
      </template>

      <AppMain>
        <template #prefix>
          <MultiTab />
        </template>
        <router-view />
        <template #suffix>
          <Footer />
          <n-back-top />
        </template>
      </AppMain>
    </n-layout>
    <Settings v-model:show="settings" />
  </n-layout>
</template>

<style>

</style>
