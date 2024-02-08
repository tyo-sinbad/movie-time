<template>
  <nav :class="$route.name === 'detail' ? 'detail-top-nav' : 'other-top-nav'">
    <!-- Logo -->
    <div class="flex items-center px-5 ml-24 cursor-pointer" @click="navigateToHome()">
      <img src="../../../assets/icons/movietime-logo.svg" />
    </div>

    <!-- Search Bar -->
    <div :class="$route.name === 'detail' ? 'search-detail-top-nav' : 'search-other-top-nav'">
      <!-- Left Search Icon -->
      <div class="mr-2">
        <img src="../../../assets/icons/ic_movie.svg" />
      </div>
      <input
        type="text"
        placeholder="Find Movie"
        :class="$route.name === 'detail' ? 'input-detail-top-nav' : 'input-other-top-nav'"
        v-model="searchQuery"
        @input="handleInput"
      />
      <!-- Right Search Icon -->
      <div class="ml-2">
        <font-awesome-icon :icon="['fas', 'fa-search']" class="fa-sm mr-2" />
      </div>
      <!-- Autocomplete Dropdown -->
      <ul
        v-if="showResults"
        class="absolute bg-secondary mt-2 w-full z-50 top-10 py-2 px-4 max-h-48 overflow-y-auto"
        style="left: 0"
      >
        <li
          class="text-white font-primary text-sm mb-1 hover:bg-gray-700 cursor-pointer"
          v-for="result in searchResults"
          :key="result.id"
          @click="selectResult(result)"
        >
          {{ result.title }}
        </li>
      </ul>
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
        <div class="flex flex-row items-center">
          <img src="../../../assets/icons/ic-view-grid.svg" />
          <a href="#" class="hover:text-gray-300 text-sm px-2 font-semibold">CATEGORIES</a>
        </div>
        <!-- Dropdown Menu -->
        <div
          v-show="showCategoryMenu"
          @mouseenter="clearCategoryMenuTimeout"
          @mouseleave="hideCategoryMenu"
          class="absolute top-full mt-2 bg-gray-800 text-white py-2 rounded-lg shadow-md z-10 w-40"
        >
          <router-link
            v-for="(genre, index) in genreData"
            :key="index"
            :to="{ name: 'category', params: { action: genre.id } }"
            class="block px-4 py-2 hover:bg-gray-700"
            @click.prevent="navigateToAction(genre.id)"
            >{{ genre.name }}</router-link
          >
        </div>
      </div>

      <a
        class="hover:text-gray-300 text-sm px-5 font-semibold cursor-pointer"
        @click="navigateToPage('movie')"
        >MOVIES</a
      >
      <a
        class="hover:text-gray-300 text-sm px-5 font-semibold cursor-pointer"
        @click="navigateToPage('tv')"
        >TV SHOWS</a
      >
      <a href="#" class="hover:text-gray-300 text-sm px-5 font-semibold">LOGIN</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
export default {
  name: 'TopNavigation',
  data() {
    return {
      showCategoryMenu: false,
      categoryMenuTimeout: null,
      searchQuery: '',
      searchResults: [],
      showResults: false,
      currentCategoryId: null
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
    navigateToAction(id: number) {
      if (this.currentCategoryId !== id) {
        this.$router.push({ name: 'category', params: { action: id } })
      } else {
        this.refreshCategoryComponent(id)
      }
    },
    refreshCategoryComponent(id: number) {
      console.log('Refresh Category Component with ID:', id)
    },

    navigateToHome() {
      this.$router.push({ name: 'home' })
    },
    navigateToPage(page: string) {
      this.$router.push({ name: page })
    },
    async handleInput() {
      if (this.searchQuery.length > 2) {
        try {
          const data = await apiService.get(`${API.GET_SEARCH_MOVIE}&query=${this.searchQuery}`)
          this.searchResults = data.data.results
        } catch (error) {
          console.log(error)
        }
        this.showResults = this.searchResults.length > 0
      } else {
        this.searchResults = []
        this.showResults = false
      }

      if (this.searchQuery.length > 2 && this.searchResults.length === 0) {
        this.searchResults.push({ id: 0, title: 'Data Not Found' })
        this.showResults = true
      }
    },
    selectResult(data: any) {
      if (data !== 0) {
        this.$router.push({ name: 'detail', params: { movie_id: data.id } })
        this.showResults = false
      }
    }
  },
  watch: {
    // Observasi perubahan pada parameter rute 'action'
    '$route.params.action'(newValue, oldValue) {
      this.currentCategoryId = newValue
      // Pembaruan komponen kategori di sini jika diperlukan
      this.refreshCategoryComponent(newValue)
    }
  },
  beforeUnmount() {
    clearTimeout(this.categoryMenuTimeout as any)
  },
  setup() {
    const genreData = ref([])

    const getListGenre = async () => {
      try {
        const data = await apiService.get(`${API.GET_LIST_GENRE}`)
        genreData.value = data.data.genres
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await getListGenre()
    })
    return {
      genreData
    }
  }
}
</script>

<style>
.detail-top-nav {
  @apply bg-regular text-white p-4 flex items-center justify-between z-50 relative bg-opacity-20;
}

.other-top-nav {
  @apply bg-regular text-white p-4 flex items-center justify-between z-50 relative;
}
.search-detail-top-nav {
  @apply flex relative flex-1 items-center px-4 py-2 rounded-lg bg-secondary text-white focus:outline-none focus:bg-gray-900 mx-8 font-thin placeholder-white text-base bg-opacity-20;
}

.search-other-top-nav {
  @apply flex relative flex-1 items-center px-4 py-2 rounded-lg bg-secondary text-white focus:outline-none focus:bg-gray-900 mx-8 font-thin placeholder-white text-base;
}
.input-detail-top-nav {
  @apply flex-1 px-2 py-1 bg-transparent text-white focus:outline-none placeholder-white;
}
.input-other-top-nav {
  @apply flex-1 px-2 py-1 bg-transparent text-white focus:outline-none;
}
</style>
