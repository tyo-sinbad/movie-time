<template>
  <nav class="bg-regular text-white p-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center px-5 ml-24">
      <img src="../../../assets/icons/movietime-logo.svg" />
    </div>

    <!-- Search Bar -->
    <div
      class="flex flex-1 items-center px-4 py-2 rounded-lg bg-secondary text-white focus:outline-none focus:bg-gray-900 mx-8 font-thin placeholder-white text-base"
    >
      <!-- Left Search Icon -->
      <div class="mr-2">
        <img src="../../../assets/icons/ic_movie.svg" />
      </div>
      <input
        type="text"
        placeholder="Find Movie"
        class="flex-1 px-2 py-1 bg-transparent text-white focus:outline-none"
      />
      <!-- Right Search Icon -->
      <div class="ml-2">
        <font-awesome-icon :icon="['fas', 'fa-search']" class="fa-sm mr-2" />
      </div>
    </div>

    <!-- Menu -->
    <div class="flex items-center space-x-4 relative mx-4 mr-24">
      <!-- Category Menu -->
      <div
        class="relative"
        @mouseover="showCategoryMenu = true"
        @mouseleave="hideCategoryMenu"
        @mouseenter="clearCategoryMenuTimeout"
      >
        <a href="#" class="hover:text-gray-300 text-sm px-5 font-semibold">CATEGORIES</a>
        <!-- Dropdown Menu -->
        <div
          v-show="showCategoryMenu"
          @mouseenter="clearCategoryMenuTimeout"
          @mouseleave="hideCategoryMenu"
          class="absolute top-full left-0 mt-2 bg-gray-800 text-white py-2 rounded-lg shadow-md z-10"
        >
          <a href="#" class="block px-4 py-2 hover:bg-gray-700" @click="navigateToAction">Action</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-700">Horror</a>
          <!-- Add more sub-menu items as needed -->
        </div>
      </div>

      <a href="#" class="hover:text-gray-300 text-sm px-5 font-semibold">MOVIES</a>
      <a href="#" class="hover:text-gray-300 text-sm px-5 font-semibold">TV SHOWS</a>
      <a href="#" class="hover:text-gray-300 text-sm px-5 font-semibold">LOGIN</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
export default {
  name: 'TopNavigation',
  data() {
    return {
      showCategoryMenu: false,
      categoryMenuTimeout: null
    }
  },
  methods: {
    hideCategoryMenu() {
      this.categoryMenuTimeout = setTimeout(() => {
        this.showCategoryMenu = false
      }, 200) as any
    },
    clearCategoryMenuTimeout() {
      clearTimeout(this.categoryMenuTimeout as any)
    },
    navigateToAction() {
      this.$router.push({ name: 'category', params: { action: 'action' } })
    }
  },
  beforeUnmount() {
    clearTimeout(this.categoryMenuTimeout as any)
  }
}
</script>

<style scoped></style>
