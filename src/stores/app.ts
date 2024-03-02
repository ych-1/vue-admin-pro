import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme, dateZhCN, useOsTheme, zhCN } from 'naive-ui'
import type { LayoutSetting } from '@/settings/layout-setting'
import layoutSetting, { defaultSetting } from '@/settings/layout-setting'
import naiveUiThemeOverrides from '@/settings/naive-ui-theme-overrides'
import { calculateColors } from '@/utils/color'

export const useAppStore = defineStore('app', () => {
  const app: LayoutSetting = toReactive(layoutSetting)

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const osTheme = useOsTheme()

  const theme = computed(() => {
    if (app.dark === 'auto')
      return osTheme.value === 'dark' ? darkTheme : null
    return app.dark ? darkTheme : null
  })

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    const colors = {
      ...calculateColors('primary', app.primaryColor),
    }
    naiveUiThemeOverrides.common = {
      ...naiveUiThemeOverrides.common,
      ...colors,
      borderRadius: `${app.radius}px`,
      borderRadiusSmall: `${app.radius * 0.8}px`,
      invertedColor: app.invertedColor,
    }
    console.log(naiveUiThemeOverrides)
    return {
      ...naiveUiThemeOverrides,
    }
  })

  const locale = computed(() => zhCN)

  const dateLocale = computed(() => dateZhCN)

  const toggleTheme = () => {
    app.dark = theme.value !== darkTheme
  }

  const reset = () => {
    Object.assign(app, defaultSetting)
  }

  const copy = () => {
    const { copy } = useClipboard()
    copy(JSON.stringify(app, null, 2)).then(() => {
      window.$message?.success('复制成功，请粘贴到 src/settings/layout-setting.ts 中', {
        keepAliveOnHover: true,
      })
    })
  }

  watch(() => app.dark, () => {
    toggleDark(theme.value === darkTheme)
  }, {
    immediate: true,
  })

  watch(() => app.headerFixed, (value: boolean) => {
    if (!value)
      app.multiTabsFixed = false
  })

  watch(() => app.multiTabsFixed, (value: boolean) => {
    if (value)
      app.headerFixed = true
  })

  return {
    ...toRefs(app),
    isDark,
    theme,
    themeOverrides,
    locale,
    dateLocale,
    toggleTheme,
    reset,
    copy,
  }
})
