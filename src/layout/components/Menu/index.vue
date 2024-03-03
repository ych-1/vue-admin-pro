<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { AppstoreOutlined, BankOutlined, CloseSquareOutlined } from '@vicons/antd'
import { renderIcon } from '@/utils/render.ts'
import { useAppStore } from '@/stores/app'

withDefaults(defineProps<{
  inverted?: boolean
  mode?: 'horizontal' | 'vertical'
}>(), {
  inverted: false,
  mode: 'vertical',
})

const options: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon(AppstoreOutlined),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy',
          },
        ],
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion',
          },
        ],
      },
    ],
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: renderIcon(BankOutlined),
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(CloseSquareOutlined),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not',
      },
    ],
  },
]

const defaultExpandedKeys = ['fish', 'braise']

const { accordion, siderCollapsedWidth } = storeToRefs(useAppStore())

function renderLabel(option: MenuOption) {
  return h('div', {}, {
    default: () => option.label,
  })
}
</script>

<template>
  <n-menu
    :inverted="inverted"
    :mode="mode"
    :collapsed-width="siderCollapsedWidth"
    :accordion="accordion"
    :options="options"
    :default-expanded-keys="defaultExpandedKeys"
    :indent="22"
    :root-indent="20"
    :responsive="true"
    :render-label="renderLabel"
  />
</template>

<style scoped>

</style>
