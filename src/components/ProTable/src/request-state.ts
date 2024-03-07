import type { PaginationProps } from 'naive-ui'
import type { ProTableProps } from '..'

export function useRequestState(props: ProTableProps) {
  const data = ref <Record<string, any>>([])
  const loading = ref(false)
  let queryForm: Record<string, any> = {}

  const pagination: PaginationProps = reactive({
    page: 1,
    pageSize: 10,
    showSizePicker: true,
  })

  const remote = computed(() => {
    if (props.request)
      return true
    return props.remote
  })

  const fetch = async (params?: Record<string, any>) => {
    if (!props.request)
      return
    try {
      loading.value = true
      const { records, total = 0 } = await props.request({
        current: pagination.page ?? 1,
        size: pagination.pageSize ?? 10,
        ...props.params,
        ...queryForm,
        ...params,
      })
      pagination.itemCount = total
      data.value = records
    }
    finally {
      loading.value = false
    }
  }

  onMounted(() => {
    if (props.manual)
      fetch().then(() => {})
  })

  pagination['onUpdate:page'] = (page: number) => {
    pagination.page = page
    fetch()
  }

  pagination['onUpdate:pageSize'] = (pageSize: number) => {
    pagination.page = 1
    pagination.pageSize = pageSize
    fetch()
  }

  const requestProps = reactive({
    remote,
    data: computed<any>(() => {
      if (props.request)
        return data.value
      else
        return props.data
    }),
    loading: computed<boolean>(() => {
      if (props.request)
        return loading.value
      else
        return props.loading
    }),
    pagination: computed<PaginationProps | false>(() => {
      if (props.request) {
        return {
          ...props.pagination,
          ...pagination,
        }
      }
      return props?.pagination
    }),
  })

  const search = async (params?: Record<string, any>) => {
    const queryParams = {
      ...params,
    }
    try {
      queryForm = {}
      await fetch(queryParams)
      queryForm = queryParams
      pagination.page = 1
    }
    catch (e) {
      console.error(e)
    }
  }

  return {
    requestProps,
    fetch,
    search,
  }
}
