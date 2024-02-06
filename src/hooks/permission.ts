import { useUserStore } from '@/stores/user.ts'

export function usePermission() {
  const userStore = useUserStore()
  const permissions = computed<string[]>(() => userStore.permissions)

  const hasPermission = (permission: string | string[]) => {
    console.log('permissions', permissions.value)
    const _permissions = Array.isArray(permission) ? permission : [permission]
    return _permissions.some(p => permissions.value.includes(p))
  }

  return {
    permissions,
    hasPermission,
  }
}
