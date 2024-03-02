import type { useDialog, useLoadingBar, useMessage, useModal, useNotification } from 'naive-ui'
import { merge } from 'lodash-es'

export interface NaiveProvider {
  message: ReturnType<typeof useMessage>
  loadingBar: ReturnType<typeof useLoadingBar>
  dialog: ReturnType<typeof useDialog>
  notification: ReturnType<typeof useNotification>
  modal: ReturnType<typeof useModal>
}

const naiveProvider: Partial<NaiveProvider> = {}

export function useNaiveProvider() {
  return naiveProvider
}

export function setupNaiveProvider(provider: NaiveProvider) {
  merge(naiveProvider, provider)
}
