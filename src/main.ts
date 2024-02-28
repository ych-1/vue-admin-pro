import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'

import 'uno.css'

// 通用字体
import 'vfonts/Lato.css'

// 等宽字体
import 'vfonts/FiraCode.css'

async function bootstrap() {
  const app = createApp(App)

  // 注册状态管理
  setupStore(app)

  // 注册路由
  setupRouter(app)

  app.mount('#app')
}

bootstrap().then(() => console.log('App is ready!'))
