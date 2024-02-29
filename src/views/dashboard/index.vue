<script setup lang="ts">

</script>

<template>
  <PageWrapper>
    <h1>
      Dashboard
    </h1>
    <div v-for="i in 20" :key="i" class="h-50px">
      占位{{ i }}
    </div>
  </PageWrapper>
</template>

<style scoped>

</style>
