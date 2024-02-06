<template>
  <el-container class="bg-white">
    <el-container>
      <el-header class="h-12 bg-dark">
        <TopBar />
      </el-header>

      <el-main style="padding: 32px">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
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
