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

const { siderWidth, siderCollapsedWidth, headerHeight } = storeToRefs(useAppStore())

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    width: `${props.collapsed ? siderCollapsedWidth.value : siderWidth.value}px`,
    height: `${headerHeight.value}px`,
    boxSizing: 'border-box',
    flexShrink: 0,
  }
  // if (bordered.value && layout.value === 'side')
  // styles.borderBottom = '1px solid var(--n-border-color)'

  return styles
})

const router = useRouter()

function to(path: string) {
  router.push(path)
}
</script>

<template>
  <n-el
    class="text-truncate flex items-center justify-center flex-shrink-0 cursor-pointer" :style="styles"
    @cli.capture="to('/')"
  >
    <transition name="fade" mode="out-in">
      <div v-if="collapsed" class="flex items-center justify-center">
        <img v-if="logoUrl" :src="logoUrl" class="w-38px h-38px" alt="LOGO">
        <h1 v-else class="font-600 text-16px v-middle ml-12px">
          {{ APP_TITLE }}
        </h1>
      </div>
      <div v-else class="flex items-center justify-center">
        <img v-if="logoUrl" :src="logoUrl" class="w-32px h-32px" alt="LOGO">
        <h1 class="font-600 text-16px v-middle ml-12px">
          {{ APP_TITLE }}
        </h1>
      </div>
    </transition>
  </n-el>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
