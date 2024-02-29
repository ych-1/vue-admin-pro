import { h } from 'vue'
import Icon from '@/components/Icon/index.vue'

export function renderIcon(icon: string) {
  return () => h(Icon, { name: icon })
}
