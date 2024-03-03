<script setup lang='ts'>
import { AppMain, Breadcrumb, Footer, Hamburger, Header, Logo, Menu, MultiTab, Settings, Sider } from './components'
import { useAppStore } from '@/stores/app'
import { SiderDrawer } from '@/layout/components'

const { layout, inverted, collapsed, settings } = storeToRefs(useAppStore())

const { isPad, isMobile } = useQueryBreakpoints()

watch(isPad, (value) => {
  collapsed.value = value
})
</script>

<template>
  <n-layout class="h-screen select-none" embedded :native-scrollbar="false" :has-sider="layout === 'side'">
    <template v-if="layout === 'side' && !isMobile">
      <Sider :inverted="inverted">
        <Logo :collapsed="collapsed" />
        <Menu :inverted="inverted" mode="vertical" />
      </Sider>
    </template>
    <template v-if="layout === 'top' || layout === 'mix'">
      <Header :inverted="inverted">
        <Logo v-if="!isMobile" />
        <Hamburger v-if="layout === 'mix' || isMobile" v-model:collapsed="collapsed" />
        <Breadcrumb />
        <Menu v-if="layout === 'top' && !isMobile" mode="horizontal" :inverted="inverted" />
      </Header>
    </template>
    <template v-if="isMobile">
      <SiderDrawer v-model:show="collapsed">
        <Logo />
        <Menu mode="vertical" :inverted="inverted" />
      </SiderDrawer>
    </template>
    <n-layout embedded :native-scrollbar="false" :has-sider="layout === 'mix'">
      <template v-if="layout === 'side'">
        <Header>
          <Hamburger v-model:collapsed="collapsed" />
          <Breadcrumb />
        </Header>
      </template>
      <template v-if="layout === 'mix' && !isMobile">
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
