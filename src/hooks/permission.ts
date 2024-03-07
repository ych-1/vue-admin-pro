import { useUserStore } from '@/stores/user.ts'

export function usePermission() {
  const userStore = useUserStore()
  const permissions = computed<string[]>(() => userStore.permissions)

  const hasPermission = (permission: string | string[]) => {
    const arr = Array.isArray(permission) ? permission : [permission]
    return arr.every(p => permissions.value.includes(p))
  }

  return {
    permissions,
    hasPermission,
  }
}
