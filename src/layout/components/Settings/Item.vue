<script setup lang="ts">
import type { ItemType } from './index.vue'
import { useAppStore } from '@/stores/app'

const { name } = withDefaults(defineProps<ItemType>(), {
  props: () => {},
})

const appStore = useAppStore()

function onUpdateValue(value: any) {
  console.log(value)
  if (name) {
    appStore.$patch({
      [name]: value,
    })
  }
}
</script>

<template>
  <template v-if="type === 'group'">
    <n-divider title-placement="left">
      {{ label }}
    </n-divider>
  </template>
  <n-space v-else :wrap="false" :wrap-item="false" align="center" justify="space-between" class="item">
    <template v-if="label">
      <span>{{ label }}</span>
    </template>

    <template v-if="type === 'switch'">
      <n-switch :default-value="value" v-bind="props" @update:value="onUpdateValue" />
    </template>
    <template v-else-if="type === 'select'">
      <n-select :default-value="value" v-bind="props" @update:value="onUpdateValue" />
    </template>
    <template v-else-if="type === 'input'">
      <n-input :default-value="value" v-bind="props" @update:value="onUpdateValue" />
    </template>
    <template v-else-if="type === 'color'">
      <n-color-picker :default-value="value" v-bind="props" @update:value="onUpdateValue" />
    </template>
    <template v-else-if="type === 'number'">
      <n-input-number :default-value="value" v-bind="props" @update:value="onUpdateValue" />
    </template>
    <template v-else-if="type === 'radio'">
      <n-radio-group :value="value" :default-value="value" v-bind="props" @update:value="onUpdateValue">
        <n-radio-button v-for="option in props.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </n-radio-button>
      </n-radio-group>
    </template>
    <template v-else-if="type === 'checkbox'">
      <n-checkbox-group :value="value" :default-value="value" v-bind="props" @update:value="onUpdateValue">
        <n-checkbox v-for="option in props.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </n-checkbox>
      </n-checkbox-group>
    </template>
  </n-space>
</template>

<style scoped>
.item.n-space {
  padding: 5px 0;
}

.item.n-space .n-select {
  width: 140px;
}

.item.n-space .n-input-number {
  width: 100px;
}

.item.n-space .n-color-picker {
  width: 150px;
}
</style>
