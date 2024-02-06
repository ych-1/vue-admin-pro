/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent } from 'vue'

  const component: ReturnType<typeof defineComponent>
  export default component
}

interface ImportMetaEnv {
  VI_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
