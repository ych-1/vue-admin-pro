<script setup lang="ts">
import CheckboxLayout from './CheckboxLayout.vue'

const modelValue = defineModel<'side' | 'top' | 'mix'>('value')

const options: {
  title: string
  value: 'side' | 'top' | 'mix'
}[] = [
  { title: '侧边布局', value: 'side' },
  { title: '顶部布局', value: 'top' },
  { title: '混合布局', value: 'mix' },
]
</script>

<template>
  <n-divider title-placement="center">
    布局模式
  </n-divider>
  <n-flex align="center" justify="center" class="w-full">
    <template v-for="item in options" :key="item.value">
      <n-tooltip>
        <template #trigger>
          <CheckboxLayout
            :mode="item.value"
            :checked="item.value === modelValue"
            @click="() => {
              modelValue = item.value as 'side' | 'top' | 'mix'
            }"
          />
        </template>
        {{ item.title }}
      </n-tooltip>
    </template>
  </n-flex>
</template>

<style scoped>

</style>
