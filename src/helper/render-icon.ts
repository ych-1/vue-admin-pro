import type { Component } from 'vue'
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import * as icons from '@vicons/antd'

export function renderIcon(icon: Component | string) {
  if (typeof icon === 'string') {
    return () => h(NIcon, null, {
      default: () => h(icons[icon as keyof typeof icons]),
    })
  }
  return () => h(NIcon, null, {
    default: () => h(icon),
  })
}
