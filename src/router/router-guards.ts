import type { Router } from 'vue-router'
import { APP_TITLE } from '@/utils/constants.ts'

export function createRouterGuards(router: Router) {
  router.beforeEach((to) => {
    console.log('to -->', to.fullPath)
    // 加载进度条 开始
    window.$loadingBar?.start()
  })

  router.afterEach((to) => {
    // 页面标题
    const title = to.meta.title as string
    if (title)
      document.title = `${APP_TITLE} - ${title}`
    else
      document.title = APP_TITLE

    // 加载进度条 完成
    setTimeout(() => {
      window.$loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    // 加载进度条 错误
    window.$loadingBar?.error()
  })
}
