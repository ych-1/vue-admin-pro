<script setup lang="ts">
import { defineComponent } from 'vue'
import { useDialog, useLoadingBar, useMessage, useModal, useNotification } from 'naive-ui'

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  setup(_, { slots }) {
    const message = useMessage()
    const dialog = useDialog()
    const notification = useNotification()
    const loadingBar = useLoadingBar()
    const modal = useModal()

    window.$loadingBar = loadingBar
    window.$notification = notification
    window.$dialog = dialog
    window.$message = message
    window.$modal = modal

    setupNaiveProvider({
      message,
      dialog,
      notification,
      loadingBar,
      modal,
    })

    return () => slots.default?.()
  },
})
</script>

<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-modal-provider>
        <n-notification-provider>
          <n-message-provider>
            <NaiveProviderContent>
              <n-el>
                <slot name="default" />
              </n-el>
            </NaiveProviderContent>
          </n-message-provider>
        </n-notification-provider>
      </n-modal-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>
