<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui'
import { EditOutlined, LogoutOutlined, UserOutlined } from '@vicons/antd'
import { renderIcon } from '@/utils/render.ts'

const options = computed<DropdownOption[]>(() => [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserOutlined),
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditOutlined),
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutOutlined),
  },
])

const avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
</script>

<template>
  <n-dropdown :options="options" show-arrow>
    <n-button class="h-full px-12px" quaternary :focusable="false">
      <n-avatar :src="avatar" circle :size="28" />
      <span class="ml-2 text-16px color-[var(--text-color)]">
        Admin
      </span>
    </n-button>
  </n-dropdown>
</template>
