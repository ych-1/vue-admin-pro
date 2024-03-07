import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw> {
  path: '/system',
  name: 'System',
  redirect: '/system/user',
  children: [
    {
      path: 'user',
      name: 'User',
      component: null,
    },
  ],
}
