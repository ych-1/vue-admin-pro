import type { PropType } from 'vue'
import type { ProTableColumn } from '../../ProTable/src/typing'

export const queryFormProps = {
  columns: {
    type: Array as PropType<ProTableColumn[]>,
    default: () => [],
  },
  search: {
    type: Function as PropType<(params?: Record<string, any>) => void>,
    default: undefined,
  },
  reset: {
    type: Function as PropType<() => void>,
    default: undefined,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
}

export type QueryFormProps = Partial<ExtractPropTypes<typeof queryFormProps>>
