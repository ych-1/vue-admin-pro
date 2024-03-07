<script setup lang="ts">
const show = defineModel('show', {
  required: true,
  default: false,
  get: value => !value,
  set: value => !value,
})

const { siderWidth, inverted } = storeToRefs(useAppStore())
</script>

<template>
  <n-drawer v-model:show="show" placement="left" :width="siderWidth">
    <n-layout has-sider>
      <n-layout-sider
        :native-scrollbar="false"
        :inverted="inverted"
        :width="siderWidth"
        content-class="h-screen"
      >
        <slot />
      </n-layout-sider>
    </n-layout>
  </n-drawer>
</template>

<style scoped>

</style>
