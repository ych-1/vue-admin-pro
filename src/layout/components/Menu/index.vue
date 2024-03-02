<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'

import type { CSSProperties } from 'vue'
import { renderIcon } from '@/utils/render.ts'
import { useAppStore } from '@/stores/app'

withDefaults(defineProps<{
  inverted?: boolean
  mode?: 'horizontal' | 'vertical'
}>(), {
  inverted: false,
  mode: 'vertical',
})

const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon('i-carbon:fish'),
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
    icon: renderIcon('i-carbon:bee'),
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon('i-carbon:basketball'),
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

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    '--n-menu-item-content--child-active': `var(--item-text-color)`,
    '--n-item-text-color-active': `var(--item-text-color-active)`,
  }
  return styles
})
</script>

<template>
  <n-menu
    :inverted="inverted"
    :mode="mode"
    :collapsed-width="siderCollapsedWidth"
    :accordion="accordion"
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    :indent="22"
    :root-indent="20"
    :responsive="true"
    :style="style"
  />
</template>
