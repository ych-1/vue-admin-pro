import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'

import 'uno.css'

async function bootstrap() {
  const app = createApp(App)

  // 注册状态管理
  setupStore(app)

  // 注册路由
  setupRouter(app)

  app.mount('#app')
}

// eslint-disable-next-line no-console
bootstrap().then(() => console.log('App is ready!'))
