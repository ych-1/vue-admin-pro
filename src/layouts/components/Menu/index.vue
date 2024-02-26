<script lang="ts" setup>
import type { Component } from 'vue'
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  ClusterOutlined as BagOutlineIcon,
  AntDesignOutlined as FishIcon,
  AppstoreAddOutlined as PawIcon,
} from '@vicons/antd'
import { useAppStore } from '@/stores/app.ts'

withDefaults(defineProps<{
  mode?: 'vertical' | 'horizontal'
  inverted?: boolean
}>(), {
  mode: 'vertical',
  inverted: false,
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon(FishIcon),
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
    icon: renderIcon(PawIcon),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals',
      },
    ],
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not',
      },
    ],
  },
]

const { siderCollapsedWidth } = storeToRefs(useAppStore())
</script>

<template>
  <n-menu
    :accordion="true"
    :collapsed-width="siderCollapsedWidth"
    :inverted="inverted"
    :options="menuOptions"
    :mode="mode"
    :root-indent="16"
    :indent="24"
    :responsive="true"
  />
</template>
