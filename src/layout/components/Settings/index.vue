<script lang="ts" setup>
import { NColorPicker, NDivider, NFlex, NInput, NInputNumber, NSelect, NSwitch } from 'naive-ui'
import type { Component } from 'vue'
import DarkMode from './DarkMode.vue'
import LayoutMode from './LayoutMode.vue'
import { animationOptions } from '@/settings/animation'
import { useAppStore } from '@/stores/app'

export interface OptionType {
  key?: string
  value?: any
  text?: string
  type: 'switch' | 'select' | 'input' | 'color' | 'number' | 'divider'
  props?: any
}

const show = defineModel('show', { type: Boolean, default: false })

const appStore = useAppStore()

const {
  layout,
  collapsed,
  inverted,
  invertedColor,
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
  radius,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  errorColor,
} = storeToRefs(appStore)

const options = computed<OptionType[]>(() => [
  {
    key: 'd2',
    type: 'divider',
    text: '系统主题',
  },
  {
    key: 'inverted',
    text: '反转色模式（亮色模式生效）',
    value: inverted,
    type: 'switch',
  },
  {
    key: 'invertedColor',
    text: '反转色',
    value: invertedColor,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    key: 'primaryColor',
    text: '主题色',
    value: primaryColor,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    key: 'infoColor',
    text: '信息色',
    value: infoColor,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    key: 'successColor',
    text: '成功色',
    value: successColor,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    key: 'warningColor',
    text: '警告色',
    value: warningColor,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    key: 'errorColor',
    text: '错误色',
    value: errorColor,
    type: 'color',
    props: {
      showAlpha: false,
    },
  },
  {
    key: 'd3',
    type: 'divider',
    text: '界面功能',
  },
  {
    key: 'collapsed',
    text: '侧边栏收缩',
    value: collapsed,
    type: 'switch',
  },
  {
    key: 'logo',
    text: '显示 Logo',
    value: logo,
    type: 'switch',
  },
  {
    key: 'breadcrumb',
    text: '显示面包屑',
    value: breadcrumb,
    type: 'switch',
  },
  {
    key: 'multiTabs',
    text: '显示多标签',
    value: multiTabs,
    type: 'switch',
  },
  {
    key: 'footer',
    text: '显示底栏',
    value: footer,
    type: 'switch',
  },
  {
    key: 'headerFixed',
    text: '固定顶栏',
    value: headerFixed,
    type: 'switch',
  },
  {
    key: 'multiTabsFixed',
    text: '固定多标签',
    value: multiTabsFixed,
    type: 'switch',
  },
  {
    key: 'accordion',
    text: '手风琴模式',
    value: accordion,
    type: 'switch',
  },
  {
    key: 'd4',
    type: 'divider',
    text: '界面显示',
  },
  {
    key: 'radius',
    text: '圆角大小',
    value: radius,
    type: 'number',
    props: {
      max: 20,
      min: 0,
    },
  },
  {
    key: 'bordered',
    text: '边框',
    value: bordered,
    type: 'switch',
  },
  {
    key: 'siderWidth',
    text: '侧边栏宽度',
    value: siderWidth,
    type: 'number',
    props: {
      max: 280,
      min: 180,
      step: 5,
    },
  },
  {
    key: 'siderCollapsedWidth',
    text: '侧边栏收起宽度',
    value: siderCollapsedWidth,
    type: 'number',
    props: {
      max: 60,
      min: 40,
      step: 1,
    },
  },
  {
    key: 'showTrigger',
    text: '侧边栏触发器',
    value: showTrigger,
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
    key: 'headerHeight',
    text: '顶栏高度',
    value: headerHeight,
    type: 'number',
    props: {
      max: 60,
      min: 45,
      step: 1,
    },
  },
  {
    key: 'multiTabsHeight',
    text: '多标签高度',
    value: multiTabsHeight,
    type: 'number',
    props: {
      max: 50,
      min: 32,
      step: 1,
    },
  },
  {
    key: 'footerHeight',
    text: '底栏高度',
    value: footerHeight,
    type: 'number',
    props: {
      max: 50,
      min: 30,
      step: 1,
    },
  },
  {
    key: 'd5',
    type: 'divider',
    text: '动画效果',
  },
  {
    key: 'animation',
    text: '动画效果',
    value: animation,
    type: 'select',
    props: {
      options: [
        ...animationOptions,
      ],
    },
  },
])

function onUpdateValue(key: string, value: any) {
  if (key) {
    appStore.$patch({
      [key]: value,
    })
  }
}

const components: { [key: string]: Component } = {
  divider: NDivider,
  input: NInput,
  switch: NSwitch,
  select: NSelect,
  color: NColorPicker,
  number: NInputNumber,
}

function render(options: OptionType[]) {
  return () => options.map((item: OptionType) => {
    const key = item.key as string
    if (!key)
      return null
    const value = unref(item.value)

    if (item.type === 'divider' && item.text)
      return h(NDivider, { titlePlacement: 'center' }, { default: () => item.text })

    return h(NFlex, { align: 'center', justify: item.text ? 'space-between' : 'center' }, {
      default: () => [
        item.text && h('span', { class: 'flex-1' }, item.text),
        components[item.type] && h(components[item.type], {
          value,
          ...item.props,
          style: { maxWidth: '150px' },
          onUpdateValue: (value: any) => onUpdateValue(key, value),
        }),
      ],
    })
  })
}
</script>

<template>
  <n-drawer v-model:show="show" :width="320" close-on-esc>
    <n-drawer-content title="页面配置" :native-scrollbar="false" closable>
      <DarkMode v-model:value="dark" />
      <LayoutMode v-model:value="layout" />
      <component :is="render(options)" />
      <template #footer>
        <NFlex>
          <n-button secondary @click="appStore.reset">
            重置
          </n-button>
          <n-button strong type="primary" @click="appStore.copy">
            复制配置
          </n-button>
        </NFlex>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
:deep(.n-flex) {
  padding: 5px 0;
}

:deep(.n-select) {
  width: 140px;
}

:deep(.n-input-number) {
  width: 100px;
}

:deep(.n-color-picker) {
  width: 120px;
}

:deep(.n-divider:not(.n-divider--vertical):first-child) {
  margin-top: 16px;
}
</style>
