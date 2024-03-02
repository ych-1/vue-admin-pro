import { useStorage } from '@vueuse/core'
import type { AnimationType } from './animation'

export const LAYOUT_SETTING_STORAGE_KEY = 'LAYOUT_SETTING'

export interface LayoutSetting {
  layout: 'side' | 'top' | 'mix'
  collapsed: boolean
  inverted: boolean
  invertedColor: string
  bordered: boolean
  dark: 'auto' | boolean
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
  primaryColor: string
  radius: number
  settings: boolean
}

export const defaultSetting: LayoutSetting = {
  layout: 'mix',
  collapsed: false,
  inverted: true,
  invertedColor: '#001429',
  bordered: true,
  dark: false,
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
}

export default useStorage<LayoutSetting>(LAYOUT_SETTING_STORAGE_KEY, defaultSetting)
