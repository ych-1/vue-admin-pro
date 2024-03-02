import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-c', 'flex items-center '],
    ['f-c-c', 'flex items-center justify-center'],
    ['f-c-sb', 'flex items-center justify-between'],
    ['f-c-sa', 'flex items-center justify-around'],
    ['text-ellipsis', 'truncate'],
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      primary_hover: 'var(--primary-color-hover)',
      primary_pressed: 'var(--primary-color-pressed)',
      primary_suppl: 'var(--primary-color-suppl)',
      success: 'var(--success-color)',
      success_hover: 'var(--success-color-hover)',
      success_pressed: 'var(--success-color-pressed)',
      success_suppl: 'var(--success-color-suppl)',
      info: 'var(--info-color)',
      info_hover: 'var(--info-color-hover)',
      info_pressed: 'var(--info-color-pressed)',
      info_suppl: 'var(--info-color-suppl)',
      warning: 'var(--warning-color)',
      warning_hover: 'var(--warning-color-hover)',
      warning_pressed: 'var(--warning-color-pressed)',
      warning_suppl: 'var(--warning-color-suppl)',
      error: 'var(--error-color)',
      error_hover: 'var(--error-color-hover)',
      error_pressed: 'var(--error-color-pressed)',
      error_suppl: 'var(--error-color-suppl)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'line-height': '1em',
        'text-align': 'center',
        'position': 'relative',
      },
      collections: {

      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
