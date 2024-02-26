import { useStorage } from '@vueuse/core'

export const STORAGE_KEY_LAYOUT_SETTING = 'LAYOUT_SETTING'

export interface LayoutSetting {
  layout: 'side' | 'top' | 'mix'
  dark: boolean | 'auto'
  bordered: boolean
  collapsed: boolean
  showTrigger: boolean | 'bar' | 'arrow-circle'
  siderWidth: number
  siderCollapsedWidth: number
  headerHeight: number
  headerFixed: boolean
  contentMargin: number
  tabsHeight: number
  tabsFixed: boolean
  footerHeight: number
  show: {
    logo: boolean
    setting: boolean
    search: boolean
    breadcrumb: boolean
    tabs: boolean
  }
}

export const defaultSetting: LayoutSetting = {
  layout: 'mix',
  dark: false,
  bordered: true,
  collapsed: false,
  contentMargin: 12,
  footerHeight: 40,
  headerFixed: true,
  showTrigger: 'bar',
  headerHeight: 60,
  show: { breadcrumb: true, logo: true, search: true, setting: true, tabs: true },
  siderCollapsedWidth: 60,
  siderWidth: 220,
  tabsFixed: true,
  tabsHeight: 40,
}

export default useStorage(STORAGE_KEY_LAYOUT_SETTING, defaultSetting)
