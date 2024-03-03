import { useStorage } from '@vueuse/core'
import type { AnimationType } from './animation'

export const LAYOUT_SETTING_STORAGE_KEY = 'LAYOUT_SETTING'

export interface LayoutSetting {
  layout: 'side' | 'top' | 'mix'
  collapsed: boolean
  inverted: boolean
  invertedColor: string
  bordered: boolean
  dark: 'auto' | 'true' | 'false'
  accordion: boolean
  siderWidth: number
  siderCollapsedWidth: number
  showTrigger: boolean | 'arrow-circle' | 'bar'
  headerHeight: number
  headerFixed: boolean
  headerTheme: string
  logo: boolean
  multiTabs: boolean
  multiTabsHeight: number
  multiTabsFixed: boolean
  footer: boolean
  footerHeight: number
  breadcrumb: boolean
  animation: AnimationType
  radius: number
  settings: boolean
  primaryColor: string
  infoColor: string
  successColor: string
  warningColor: string
  errorColor: string
}

export const defaultSetting: LayoutSetting = {
  layout: 'mix',
  collapsed: false,
  inverted: true,
  invertedColor: '#001429',
  bordered: true,
  dark: 'auto',
  accordion: true,
  siderWidth: 220,
  siderCollapsedWidth: 60,
  showTrigger: 'bar',
  headerHeight: 60,
  headerFixed: true,
  headerTheme: '#fffff',
  logo: true,
  multiTabs: true,
  multiTabsHeight: 45,
  multiTabsFixed: true,
  footer: true,
  footerHeight: 40,
  breadcrumb: true,
  animation: 'fadein',
  primaryColor: '#18a058',
  radius: 3,
  settings: false,
  infoColor: '#1890ff',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#f5222d',
}

export default useStorage<LayoutSetting>(LAYOUT_SETTING_STORAGE_KEY, defaultSetting)
