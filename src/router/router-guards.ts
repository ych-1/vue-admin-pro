import type { Router } from 'vue-router'
import { APP_TITLE, LOGIN_PATH, ROUTER_WHITE_LIST } from '@/utils/constants.ts'

console.log(APP_TITLE, LOGIN_PATH, ROUTER_WHITE_LIST)

export function createRouterGuards(router: Router) {
  router.beforeEach(async (_to) => {
    // 加载进度条 开始
    window.$loadingBar?.start()

    // const token = useAuthorization()
    // if (!token.value) {
    //   if (ROUTER_WHITE_LIST.includes(to.path))
    //     return true
    //   return LOGIN_PATH
    // }

    // const userStore = useUserStore()
    // if (!userStore.userInfo) {
    //   await userStore.profile()
    //   const routes = await userStore.generateRoutes()
    //   routes.forEach((route) => {
    //     router.addRoute(route)
    //   })
    //   return to.fullPath
    // }

    // if (to.path === LOGIN_PATH)
    //   return '/'

    return true
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
