<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import {
  AmazonCircleFilled as BagOutlineIcon,
  ExperimentFilled as FishIcon,
  CarFilled as PawIcon,
} from '@vicons/antd'
import { renderIcon } from '@/helper/render-icon'
import { useAppStore } from '@/stores/app'

withDefaults(defineProps<{
  mode?: 'horizontal' | 'vertical'
}>(), {
  mode: 'vertical',
})

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

const defaultExpandedKeys = ['fish', 'braise']

const { accordion, siderCollapsedWidth } = storeToRefs(useAppStore())
</script>

<template>
  <n-menu
    :mode="mode"
    :collapsed-width="siderCollapsedWidth"
    :accordion="accordion"
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    :indent="22"
    :root-indent="20"
    :responsive="true"
  />
</template>
