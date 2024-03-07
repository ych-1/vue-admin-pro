import { defineComponent } from 'vue'
import { NCard, NDataTable, NEl } from 'naive-ui'
import QueryForm from '../../QueryForm'
import { proTableProps } from './typing'
import { useProTableProvider } from './context'
import Toolbar from './components/Toolbar'

const proTable = defineComponent({
  name: 'ProTable',
  props: {
    ...proTableProps,
  },
  setup(props, { slots }) {
    const state = useProTableProvider(props)
    return () => {
      const toolbarSlots = {
        title: slots.title,
        toolbar: slots.toolbar,
      }

      return (
        <NEl>
          <NCard class="mb-12px">
            <QueryForm
              columns={props.columns}
              loading={state.requestState?.requestProps?.loading}
              search={state.requestState?.search}
              reset={state.requestState?.search}
            />
          </NCard>
          <NCard>
            <Toolbar v-slots={toolbarSlots} />
            <NDataTable
              {...props}
              {...state?.requestState?.requestProps}
            >
            </NDataTable>
          </NCard>
        </NEl>
      )
    }
  },
})

export default proTable
