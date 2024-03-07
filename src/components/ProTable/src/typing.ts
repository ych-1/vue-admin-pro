import { dataTableProps } from 'naive-ui'
import type { DataTableColumn } from 'naive-ui'
import type { ExtractPropTypes, VNodeChild } from 'vue'

export type ValueType = 'input' | 'select'

export interface ValueEnum {
  label: string | (() => VNodeChild)
  value: string | number
  status?: 'default' | 'success' | 'error' | 'info' | 'warning'
}

export type ProTableColumn = DataTableColumn & {
  key?: string
  title?: string
  order?: number
  editable?: false | ValueType
  table?: boolean
  search?: boolean
  type?: ValueType
  value?: Record<string, any>
  fieldProps?: Record<string, any>
}

export interface ProTableOption {
  reload?: boolean
  search?: boolean
  setting?: boolean
  export?: boolean
}

export interface ProTableRequestCallback {
  records: Record<string, any>[]
  total: number
}

export type ProTableRequest = (params?: Record<string, any>) => Promise<ProTableRequestCallback>

export const proTableProps = {
  ...dataTableProps,
  columns: {
    type: Array as PropType<ProTableColumn[]>,
    default: () => [],
  },
  option: {
    type: [Object, Boolean] as PropType<false | ProTableOption>,
    default: () => ({ reload: true, search: true, setting: true }),
  },
  request: {
    type: Function as PropType<ProTableRequest>,
    default: undefined,
  },
  params: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  manual: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
}

export type ProTableProps = ExtractPropTypes<typeof proTableProps>
