import { createGlobalState, useStorage } from '@vueuse/core'

export const STORAGE_KEY_AUTHORIZATION = 'authorization'

export const useAuthorization = createGlobalState(() => useStorage<string | null>(STORAGE_KEY_AUTHORIZATION, null))
