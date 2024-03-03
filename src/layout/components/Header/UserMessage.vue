<script setup lang="ts">
import { BellOutlined } from '@vicons/antd'

// 随机生成日期  传入一个天数 计算出和当前日期相差的日期 并格式化
function randomDate(day: number) {
  return new Date(Date.now() - 1000 * 60 * 60 * 24 * day).toLocaleString()
}

const notification = ref([
  {
    avatar: 'https://avatars.githubusercontent.com/u/8186664?v=4',
    title: '通知标题',
    content: '通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
    time: randomDate(3),
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/8186664?v=4',
    title: '通知标题',
    content: '通知内容',
    time: randomDate(2),
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/8186664?v=4',
    title: '通知标题',
    content: '通知内容',
    time: randomDate(1),
  },
])

const message = ref([
  {
    title: '消息标题',
    content: '消息内容',
    time: randomDate(3),
  },
  {
    title: '消息标题',
    content: '消息内容',
    time: randomDate(2),
  },
  {
    title: '消息标题',
    content: '消息内容',
    time: randomDate(1),
  },
])

const todo = ref([
  {
    title: '待办标题',
    status: 1,
    content: '待办内容',
    time: randomDate(3),
  },
  {
    status: 2,
    title: '待办标题',
    content: '待办内容',
    time: randomDate(2),
  },
  {
    status: 3,
    title: '待办标题',
    content: '待办内容',
    time: randomDate(1),
  },
])
const { isMobile } = useQueryBreakpoints()
const width = computed<number>(() => {
  return isMobile.value ? window.innerWidth * 0.8 : 320
})
</script>

<template>
  <n-popover trigger="click" scrollable :width="width">
    <template #trigger>
      <n-button quaternary :focusable="false" class="h-full border-0 px-12px" :style="{ color: `var(--text-color)` }">
        <template #icon>
          <n-icon :size="18" :component="BellOutlined" />
        </template>
      </n-button>
    </template>

    <n-tabs type="line" animated tab-class="f-c-c min-w-80px" justify-content="space-around">
      <n-tab-pane name="通知">
        <n-list>
          <n-list-item v-for="item in notification" :key="item.title">
            <n-thing :title="item.title" :content="item.content" :description="item.time">
              <template #avatar>
                <n-avatar :src="item.avatar" />
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-tab-pane>
      <n-tab-pane name="消息">
        <n-list>
          <n-list-item v-for="item in message" :key="item.title">
            <n-thing :title="item.title" :content="item.content" :description="item.time">
              <template #avatar>
                <n-avatar :src="item.avatar" />
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-tab-pane>
      <n-tab-pane name="待办">
        <n-list>
          <n-list-item v-for="item in todo" :key="item.title">
            <n-thing :title="item.title" :content="item.content" :description="item.time">
              <template #header-extra>
                <n-badge :value="item.status" />
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-tab-pane>
    </n-tabs>
  </n-popover>
</template>
