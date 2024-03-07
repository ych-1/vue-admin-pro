import { NFlex } from 'naive-ui'
import { useProTableState } from '../../context'
import Reload from './Reload'
import Setting from './Setting'

const toolbar = defineComponent({
  name: 'Toolbar',
  setup(_props, { slots }) {
    const { option } = useProTableState()
    return () => {
      const renderToolbar = () => {
        if (option.value === false)
          return null
        return (
          <NFlex align="center">
            {option.value.reload !== false && <Reload />}
            {option.value.setting !== false && <Setting />}
          </NFlex>
        )
      }

      const renderTitle = () => {
        if (slots.title)
          return slots.title()
        return ''
      }

      return (
        <NFlex align="center" justify="space-between" class="mb-12px">
          <NFlex align="center" class="text-16px font-500">
            {renderTitle()}
          </NFlex>
          <NFlex align="center">
            {slots.toolbar?.()}
            {renderToolbar()}
          </NFlex>
        </NFlex>
      )
    }
  },
})

export default toolbar
