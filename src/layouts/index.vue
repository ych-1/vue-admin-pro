<script setup lang="ts">
import {
  Footer,
  Header,
  Layout,
  Logo,
  Main,
  Menu,
  Sider,
  Tabs,
} from './components'
</script>

<template>
  <Layout height="100vh">
    <Header>
      Header
    </Header>
    <Layout :has-sider="true" height="calc(100vh - 50px)">
      <Sider>
        <Logo />
        <Menu />
      </Sider>
      <Main>
        <Tabs />
        <Footer />
      </Main>
    </Layout>
  </Layout>
</template>

<style scoped>

</style>
