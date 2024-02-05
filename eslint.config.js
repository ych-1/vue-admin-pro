import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  ignores: [
    'types/auto-generated.d.ts',
    'types/components.d.ts',
  ],
})
