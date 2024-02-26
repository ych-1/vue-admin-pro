<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { APP_TITLE } from '@/helper/constants.ts'
import logoUrl from '@/assets/logo.svg'
import { useAppStore } from '@/stores/app.ts'

const props = withDefaults(defineProps<{
  collapsed?: boolean
}>(), {
  collapsed: false,
})

const { layout, siderWidth, siderCollapsedWidth, headerHeight, bordered } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    width: `${props.collapsed ? siderCollapsedWidth.value : siderWidth.value}px`,
    height: `${headerHeight.value}px`,
    boxSizing: 'border-box',
    flexShrink: 0,
  }
  if (bordered.value && layout.value === 'side')
    styles.borderBottom = '1px solid var(--n-border-color)'

  return styles
})

const router = useRouter()

function to(path: string) {
  router.push(path)
}
</script>

<template>
  <n-el :style="styles" class="h-full flex justify-center items-center cursor-pointer" @click="to('/')">
    <img :src="logoUrl" alt="LOGO" class="h-32px w-32px">
    <span v-if="!collapsed" class="text-lg font-bold ml-2 no-underline">
      {{ APP_TITLE }}
    </span>
  </n-el>
</template>

<style scoped>

</style>
