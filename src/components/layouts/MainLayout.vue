<template>
  <div class="bg-white flex flex-col">
    <header class="h-12 bg-dark">
      <TopBar />
    </header>

    <main :class="$route.name === 'detail' ? 'detail-page' : 'other-page'">
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

<style>
.detail-page {
  @apply bg-white mt-8 flex-grow;
}

.other-page {
  @apply bg-secondary mt-8 flex-grow;
}
</style>
