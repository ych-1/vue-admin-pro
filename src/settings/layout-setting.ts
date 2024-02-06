import { useStorage } from '@vueuse/core'

export const STORAGE_KEY_LAYOUT_SETTING = 'LAYOUT_SETTING'

export interface LayoutSetting {
  collapsed: boolean
  show: {
    logo: boolean
    setting: boolean
    search: boolean
    breadcrumb: boolean
    tabs: boolean
  }
  sider: {
    width: number
    collapsedWidth: number
  }
  header: {
    theme: string
    fixed: boolean
    height: number
  }
  content: {
    margin: number
  }
  tabs: {
    height: number
    fixed: boolean
  }
  footer: {
    theme: string
    fixed: boolean
    height: number
  }
}

export const defaultSetting: Partial<LayoutSetting> = {
}

export const layoutSetting = useStorage(STORAGE_KEY_LAYOUT_SETTING, defaultSetting)
