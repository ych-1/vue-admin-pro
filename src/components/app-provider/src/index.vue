<script setup lang="ts">
import { defineComponent } from 'vue'
import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  setup(_, { slots }) {
    const message = useMessage()
    const dialog = useDialog()
    const notification = useNotification()
    const loadingBar = useLoadingBar()

    window.$loadingBar = loadingBar
    window.$notification = notification
    window.$dialog = dialog
    window.$message = message

    setupNaiveProvider({
      message,
      dialog,
      notification,
      loadingBar,
    })

    return () => slots.default?.()
  },
})
</script>

<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <NaiveProviderContent>
            <slot name="default" />
          </NaiveProviderContent>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>
