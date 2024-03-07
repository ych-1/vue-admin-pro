import type { QueryFormProps } from './typing'

export default function useQueryFormState(props: QueryFormProps) {
  const model = reactive<Record<string, any>>({})
  const collapsed = ref(true)

  const items = computed(() => {
    return props?.columns?.filter((item) => {
      return item.search === true
    })
  })

  const toggle = () => {
    collapsed.value = !collapsed.value
  }

  const search = () => {
    props.search?.(model)
  }

  const reset = () => {
    for (const key in model)
      model[key] = null

    props.reset?.()
  }

  return {
    model,
    collapsed,
    items,
    toggle,
    search,
    reset,
  }
}
