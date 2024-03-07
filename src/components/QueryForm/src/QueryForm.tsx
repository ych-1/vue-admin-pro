import { NButton, NFlex, NForm, NFormItemGi, NGi, NGrid, NIcon } from 'naive-ui'
import { DownOutlined, UpOutlined } from '@vicons/antd'
import useQueryFormState from './context'
import { queryFormProps } from './typing'
import { renderField } from './RenderField'

const queryForm = defineComponent({
  name: 'QueryForm',
  props: {
    ...queryFormProps,
  },
  setup(props) {
    const { items, reset, search, collapsed, toggle, model } = useQueryFormState(props)

    return () => {
      const renderItems = () => {
        return items.value?.map((item) => {
          return (
            <NFormItemGi key={item.key} span="200:6 400:6 600:3 800:1">
              {renderField(item, model)}
            </NFormItemGi>
          )
        })
      }

      const renderAction = () => {
        return (
          <NGi suffix={true} span="200:6 400:6 600:3 800:1">
            {{ default: ({ overflow }: { overflow: true }) => (
              <NFlex align="center" justify="end" class="w-full">
                <NButton size="small" onClick={reset}>
                  重置
                </NButton>
                <NButton size="small" type="primary" onClick={search}>
                  查询
                </NButton>
                {(overflow || !collapsed.value) && (
                  <NButton text type="primary" onClick={toggle}>
                    {collapsed.value ? '展开' : '收起'}
                    <NIcon component={collapsed.value ? DownOutlined : UpOutlined} />
                  </NButton>
                )}
              </NFlex>
            ) }}
          </NGi>
        )
      }

      return (
        <NForm show-feedback={false} show-label={false}>
          <NGrid cols={6} x-gap={12} y-gap={12} collapsed={collapsed.value} item-responsive>
            {renderItems()}
            {renderAction()}
          </NGrid>
        </NForm>
      )
    }
  },
})

export default queryForm
