import { NInput, NSelect } from 'naive-ui'
import type { ProTableColumn } from '@/components/ProTable'

export function renderField(item: ProTableColumn, model: Record<string, any>) {
  const commonProps = {
    'value': model[item.key],
    'onUpdate:value': (val: any) => {
      model[item.key] = val
    },
    'placeholder': (item.title || '') as string,
    'clearable': true,
    ...item.fieldProps,
  }
  if (item.type === 'select') {
    return (
      <NSelect {...commonProps}>

      </NSelect>
    )
  }

  return <NInput {...commonProps} />
}
