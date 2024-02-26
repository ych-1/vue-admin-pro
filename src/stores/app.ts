import { toReactive, useDark, useToggle } from '@vueuse/core'
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme, dateZhCN, useOsTheme, zhCN } from 'naive-ui'
import type { LayoutSetting } from '@/settings/layout-setting.ts'
import layoutSetting, { defaultSetting } from '@/settings/layout-setting.ts'

export const useAppStore = defineStore('app', () => {
  const app = toReactive<LayoutSetting>(layoutSetting)

  const osTheme = useOsTheme()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const theme = computed(() => {
    if (app.dark === 'auto')
      return osTheme.value === 'dark' ? darkTheme : null
    return app.dark ? darkTheme : null
  })
  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    return {}
  })
  const locale = computed(() => zhCN)
  const dateLocale = computed(() => dateZhCN)

  const toggleTheme = () => {
    app.dark = theme.value !== darkTheme
  }

  const reset = () => {
    Object.assign(app, defaultSetting)
  }

  watch(() => app.headerFixed, (value) => {
    if (!value)
      app.tabsFixed = false
  })

  watch(() => app.tabsFixed, (value) => {
    if (value)
      app.headerFixed = true
  })

  watch(() => app.dark, () => {
    toggleDark(theme.value === darkTheme)
  }, { immediate: true })

  return {
    ...toRefs(app),
    theme,
    themeOverrides,
    locale,
    dateLocale,
    isDark,
    toggleTheme,
    reset,
  }
})
