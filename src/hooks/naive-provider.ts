import type { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'
import { merge } from 'lodash-es'

export interface NaiveProvider {
  message: ReturnType<typeof useMessage>
  loadingBar: ReturnType<typeof useLoadingBar>
  dialog: ReturnType<typeof useDialog>
  notification: ReturnType<typeof useNotification>
}

const naiveProvider: Partial<NaiveProvider> = {}

export function useNaiveProvider() {
  return naiveProvider
}

export function setupNaiveProvider(provider: NaiveProvider) {
  merge(naiveProvider, provider)
}
