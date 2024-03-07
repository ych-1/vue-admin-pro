import type { ProTableProps } from '..'
import { useRequestState } from './request-state'

function proTableState(props: ProTableProps) {
  const columns = computed(() => props.columns)
  const option = computed(() => props.option)
  const requestState = useRequestState(props)
  return {
    columns,
    option,
    requestState,
  }
}

const [useProTableProvider, useProTableInject] = createInjectionState(proTableState)

export function useProTableState(): ReturnType<typeof proTableState> {
  return (
    useProTableInject() ?? {
      columns: computed(() => []),
      option: computed(() => ({})),
      requestState: {} as any,
    }
  )
}

export { useProTableProvider }
