import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  jsx: true,
  unocss: true,
  ignores: [
    'types/auto-generated.d.ts',
    'types/components.d.ts',
  ],
  rules: {
    'no-console': 'off',
  },
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
})
