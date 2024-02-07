<template>
  <div class="bg-white min-h-screen flex flex-col">
    <header class="h-12 bg-dark">
      <TopBar />
    </header>

    <main class="bg-regular mt-8 flex-grow">
      <RouterView />
    </main>

    <footer class="bg-dark text-white h-12">
      <FooterBar />
    </footer>
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
