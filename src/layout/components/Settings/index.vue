<script lang="ts" setup>
import Item from './Item.vue'
import { animationOptions } from '@/settings/animation'
import { useAppStore } from '@/stores/app'

export interface ItemType {
  name?: string
  label?: string
  value?: any
  type: 'switch' | 'select' | 'input' | 'color' | 'number' | 'checkbox' | 'group' | 'radio'
  props?: any
}

const show = defineModel('show', { type: Boolean, default: false })

const appStore = useAppStore()

const {
  layout,
  collapsed,
  inverted,
  bordered,
  dark,
  accordion,
  siderWidth,
  siderCollapsedWidth,
  showTrigger,
  headerHeight,
  headerFixed,
  logo,
  multiTabs,
  multiTabsHeight,
  multiTabsFixed,
  footer,
  footerHeight,
  breadcrumb,
  animation,
  primaryColor,
  radius,
} = storeToRefs(appStore)

const list = computed<ItemType[]>(() => [
  {
    name: 'dark',
    value: dark.value,
    label: '暗色模式',
    type: 'radio',
    props: {
      options: [
        { label: '关闭', value: false },
        { label: '开启', value: true },
        { label: '自动', value: 'auto' },
      ],
    },
  },
  {
    type: 'group',
    label: '布局模式',
  },
  {
    name: 'layout',
    label: '布局',
    value: layout.value,
    type: 'select',
    props: {
      options: [
        { label: '侧边栏布局', value: 'side' },
        { label: '顶栏布局', value: 'top' },
        { label: '混合布局', value: 'mix' },
      ],
    },
  },
  {
    type: 'group',
    label: '界面功能',
  },
  {
    name: 'collapsed',
    label: '侧边栏收缩',
    value: collapsed.value,
    type: 'switch',
  },
  {
    name: 'logo',
    label: '显示 Logo',
    value: logo.value,
    type: 'switch',
  },
  {
    name: 'breadcrumb',
    label: '显示面包屑',
    value: breadcrumb.value,
    type: 'switch',
  },
  {
    name: 'multiTabs',
    label: '显示多标签',
    value: multiTabs.value,
    type: 'switch',
  },
  {
    name: 'footer',
    label: '显示底栏',
    value: footer.value,
    type: 'switch',
  },
  {
    name: 'headerFixed',
    label: '固定顶栏',
    value: headerFixed.value,
    type: 'switch',
  },
  {
    name: 'multiTabsFixed',
    label: '固定多标签',
    value: multiTabsFixed.value,
    type: 'switch',
  },
  {
    name: 'accordion',
    label: '手风琴模式',
    value: accordion.value,
    type: 'switch',
  },
  {
    name: 'inverted',
    label: '反转色模式',
    value: inverted.value,
    type: 'switch',
  },
  {
    type: 'group',
    label: '界面显示',
  },
  {
    name: 'primaryColor',
    label: '主题色',
    value: primaryColor.value,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    name: 'radius',
    label: '圆角大小',
    value: radius.value,
    type: 'number',
    props: {
      max: 20,
      min: 0,
    },
  },
  {
    name: 'bordered',
    label: '边框',
    value: bordered.value,
    type: 'switch',
  },
  {
    name: 'siderWidth',
    label: '侧边栏宽度',
    value: siderWidth.value,
    type: 'number',
    props: {
      max: 280,
      min: 180,
      step: 5,
    },
  },
  {
    name: 'siderCollapsedWidth',
    label: '侧边栏收起宽度',
    value: siderCollapsedWidth.value,
    type: 'number',
    props: {
      max: 80,
      min: 50,
      step: 1,
    },
  },
  {
    name: 'showTrigger',
    label: '侧边栏触发器',
    value: showTrigger.value,
    type: 'select',
    props: {
      options: [
        { label: '无', value: undefined },
        { label: '条形', value: 'bar' },
        { label: '箭头', value: 'arrow-circle' },
      ],
    },
  },
  {
    name: 'headerHeight',
    label: '顶栏高度',
    value: headerHeight.value,
    type: 'number',
    props: {
      max: 80,
      min: 50,
      step: 1,
    },
  },
  {
    name: 'multiTabsHeight',
    label: '多标签高度',
    value: multiTabsHeight.value,
    type: 'number',
    props: {
      max: 50,
      min: 32,
      step: 1,
    },
  },
  {
    name: 'footerHeight',
    label: '底栏高度',
    value: footerHeight.value,
    type: 'number',
    props: {
      max: 50,
      min: 30,
      step: 1,
    },
  },
  {
    type: 'group',
    label: '动画效果',
  },
  {
    name: 'animation',
    label: '动画效果',
    value: animation.value,
    type: 'select',
    props: {
      options: [
        ...animationOptions,
      ],
    },
  },
])
</script>

<template>
  <n-drawer v-model:show="show" :width="360" close-on-esc>
    <n-drawer-content title="页面配置" :native-scrollbar="false" closable>
      <Item v-for="item in list" :key="item.name" v-bind="item" />
      <template #footer>
        <n-flex>
          <n-button secondary @click="appStore.reset">
            重置
          </n-button>
          <n-button strong type="primary" @click="appStore.copy">
            复制配置
          </n-button>
        </n-flex>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
