<script setup lang="ts">
import { AccountBookFilled } from '@vicons/antd'
import { renderOperation } from '@/utils/render.ts'

function operation() {
  return renderOperation([
    {
      key: 'add',
      text: '新增',
      icon: 'i-carbon:add',
      onClick: () => {
        console.log('新增')
      },
    },
    {
      key: 'delete',
      text: '删除',
      icon: 'i-carbon:delete',
      props: {
        type: 'error',
      },
      onClick: () => {
        console.log('删除')
      },
    },
    {
      key: 'edit',
      text: '编辑',
      icon: 'i-carbon:edit',
      onClick: () => {
        console.log('编辑')
      },
    },
    {
      key: 'view',
      text: '查看',
      icon: 'i-carbon:view',
      onClick: () => {
        console.log('查看')
      },
    },
  ], {
  })
}
</script>

<template>
  <PageWrapper>
    <h1>
      Dashboard
    </h1>
    <n-flex>
      <n-button>Default</n-button>
      <n-button type="tertiary">
        Tertiary
      </n-button>
      <n-button type="primary">
        Primary
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-flex>

    <component :is="operation" />

    <n-flex>
      <n-float-button position="relative" type="primary" menu-trigger="hover">
        <n-icon>
          <AccountBookFilled />
        </n-icon>
        <template #menu>
          <n-float-button shape="square" type="primary">
            <n-icon>
              <AccountBookFilled />
            </n-icon>
          </n-float-button>
          <n-float-button>
            <n-icon>
              <AccountBookFilled />
            </n-icon>
          </n-float-button>
          <n-float-button>
            <n-icon>
              <AccountBookFilled />
            </n-icon>
          </n-float-button>
        </template>
      </n-float-button>
      <n-float-button position="relative" type="primary" menu-trigger="click">
        <n-icon>
          <AccountBookFilled />
        </n-icon>
        <template #menu>
          <n-float-button shape="square" type="primary">
            <n-icon>
              <AccountBookFilled />
            </n-icon>
          </n-float-button>
          <n-float-button>
            <n-icon>
              <AccountBookFilled />
            </n-icon>
          </n-float-button>
          <n-float-button>
            <n-icon>
              <AccountBookFilled />
            </n-icon>
          </n-float-button>
        </template>
      </n-float-button>
    </n-flex>

    <div class="scrollbar h-200px w-200px overflow-auto bg-info">
      <div class="h-400px">
        滚动条
      </div>
    </div>

    <div v-for="i in 20" :key="i" class="h-50px color-primary_pressed">
      占位{{ i }}
    </div>
  </PageWrapper>
</template>

<style scoped>

</style>
