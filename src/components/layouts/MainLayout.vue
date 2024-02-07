<template>
  <div class="bg-white">
    <header class="h-12 bg-dark">
      <TopBar />
    </header>

    <main style="padding: 32px">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// Get the router instance
const router = useRouter()

// Navigation to the homepage when the component is mounted
import { onMounted } from 'vue'

onMounted(() => {
  router.replace({ name: 'home' })
})
</script>
