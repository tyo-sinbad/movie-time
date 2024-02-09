<template>
  <div class="flex min-h-screen">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { computed } from 'vue'

const selectedProject = computed<'707' | 'Movie'>(() => {
  return import.meta.env.VITE_PROJECT || '707'
})

const favicon = computed(() => {
  return selectedProject.value === '707' ? '707-ico.png' : 'movietime-logo.svg'
})

useFavicon(favicon.value, {
  baseUrl: '/',
  rel: 'icon'
})
</script>

<style scoped></style>
