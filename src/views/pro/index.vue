<script setup lang="ts">
import { NButton } from 'naive-ui'
import { getDemoApi } from '@/api/demo'
import type { ProTableColumn } from '@/components/ProTable'
import ProTable from '@/components/ProTable'

const columns: ProTableColumn[] = [
  {
    title: 'ID',
    key: 'id',
    search: true,
    fieldProps: {
      placeholder: 'Please enter ID',
    },
  },
  {
    title: 'Name',
    key: 'name',
    search: true,
  },
  {
    title: 'Address',
    key: 'address',
    search: true,
  },
  {
    title: 'DateTime',
    key: 'dateTime',
    search: true,
  },
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
}))

const pagination = reactive({
  page: 2,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.page = 1
    pagination.pageSize = pageSize
  },
})

async function api(params: any): Promise<any> {
  const { data } = await getDemoApi(params)
  return {
    records: data?.records,
    total: data?.total,
  }
}
</script>

<template>
  <PageWrapper :embedded="true">
    <ProTable
      :columns="columns"
      :data="data"
      :bordered="false"
      :pagination="pagination"
      :option="{
        export: false,
      }"
      :request="api"
    >
      <template #title>
        Pro Table
      </template>
      <template #toolbar>
        <NButton type="primary">
          Add
        </NButton>
      </template>
    </ProTable>
  </PageWrapper>
</template>

<style scoped>

</style>
