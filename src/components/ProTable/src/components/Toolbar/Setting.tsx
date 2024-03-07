import { SettingOutlined } from '@vicons/antd'
import { NButton, NIcon, NTooltip } from 'naive-ui'

export const setting = defineComponent({
  name: 'Setting',
  setup(_props) {
    return () => {
      const tooltipSlots = {
        trigger: () => {
          return (
            <NButton
              text
              onClick={() => console.log(111)}
            >
              <NIcon size={18} component={SettingOutlined} />
            </NButton>
          )
        },
      }
      return (
        <NTooltip v-slots={tooltipSlots}>
          <span>设置</span>
        </NTooltip>
      )
    }
  },
})

export default setting
