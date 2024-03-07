import { ReloadOutlined } from '@vicons/antd'
import { NButton, NIcon, NTooltip } from 'naive-ui'
import { useProTableState } from '../../context'

const reload = defineComponent({
  name: 'Reload',
  setup() {
    return () => {
      const state = useProTableState()
      const tooltipSlots = {
        trigger: () => {
          return (
            <NButton
              text
              onClick={() => state?.requestState?.fetch()}
            >
              <NIcon size={18} component={ReloadOutlined} />
            </NButton>
          )
        },
      }
      return (
        <NTooltip v-slots={tooltipSlots}>
          <span>刷新</span>
        </NTooltip>
      )
    }
  },
})

export default reload
