<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { APP_TITLE } from '@/utils/constants.ts'
import logoUrl from '@/assets/logo.svg'
import { useAppStore } from '@/stores/app.ts'

const props = withDefaults(defineProps<{
  collapsed?: boolean
}>(), {
  collapsed: false,
})

const { logo, siderWidth, siderCollapsedWidth, headerHeight } = storeToRefs(useAppStore())

const style = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    width: `${props.collapsed ? siderCollapsedWidth.value : siderWidth.value}px`,
    height: `${headerHeight.value}px`,
    boxSizing: 'border-box',
    flexShrink: 0,
  }

  return styles
})

const router = useRouter()

function to(path: string) {
  router.push(path)
}
</script>

<template>
  <n-el
    v-if="logo"
    class="flex flex-shrink-0 cursor-pointer items-center justify-center text-truncate"
    :style="style"
    @click="to('/')"
  >
    <transition name="fade" mode="out-in">
      <div v-if="collapsed" class="flex items-center justify-center">
        <img
          v-if="logoUrl"
          :src="logoUrl"
          class="h-38px w-38px"
          alt="LOGO"
        >
        <h1 v-else class="ml-12px v-middle text-16px font-600">
          {{ APP_TITLE }}
        </h1>
      </div>
      <div v-else class="flex items-center justify-center">
        <img
          v-if="logoUrl"
          :src="logoUrl"
          class="h-32px w-32px"
          alt="LOGO"
        >
        <h1 class="ml-12px v-middle text-16px font-600">
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
