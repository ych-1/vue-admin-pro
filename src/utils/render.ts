import type { Component } from 'vue'
import { h } from 'vue'
import type { ButtonProps, DropdownOption, FlexProps } from 'naive-ui'
import { NButton, NDropdown, NFlex, NIcon } from 'naive-ui'
import * as icons from '@vicons/antd'
import { MoreOutlined } from '@vicons/antd'
import Icon from '@/components/Icon/index.vue'

export function renderIcon(icon: string | Component) {
  if (typeof icon === 'string') {
    if (icon.startsWith('i-'))
      return () => h(Icon, { name: icon })
    return () => h(NIcon, {}, { default: () =>
      h(icons[icon as keyof typeof icons]),
    })
  }
  return () => h(NIcon, {}, { default: () => h(icon) })
}

export interface OperationOptions {
  key?: string
  icon?: string
  text: string
  show?: boolean
  props?: ButtonProps
  onClick?: () => void
}

export const DEFAULT_MAX_OPERATION_COUNT = 2

export function renderOperation(options: OperationOptions[], flexProps?: FlexProps, buttonProps?: ButtonProps) {
  let visibleOptions = options.filter(option => option.show !== false)

  const moreOptions: DropdownOption[] = visibleOptions.slice(DEFAULT_MAX_OPERATION_COUNT).map(option => ({
    key: option.key,
    label: option.text,
    icon: option.icon ? renderIcon(option.icon) : undefined,
    onClick: option.onClick,
  }))

  visibleOptions = visibleOptions.slice(0, DEFAULT_MAX_OPERATION_COUNT)

  return h(NFlex, { justify: 'center', align: 'center', ...flexProps }, () => {
    const nodes = visibleOptions.map((option) => {
      return h(NButton, { type: 'primary', text: true, onClick: option.onClick, ...buttonProps, ...option.props }, {
        default: () => option.text,
        icon: option.icon && renderIcon(option.icon),
      })
    })
    moreOptions.length && nodes.push(
      h(NDropdown, { showArrow: true, options: moreOptions, onSelect: (_key, option: any) => {
        option?.onClick?.()
      } }, () =>
        h(NButton, { type: 'primary', text: true, ...buttonProps }, {
          default: () => '更多',
          icon: renderIcon(MoreOutlined),
        })),
    )
    return nodes
  })
}
