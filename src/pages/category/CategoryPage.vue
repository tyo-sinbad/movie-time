<template>
  <div class="my-10 mx-8">
    <div class="flex items-center mb-10">
      <div class="w-24 h-2 bg-red-100 mr-2"></div>
      <h2 class="text-2xl text-white font-primary">Movies</h2>
    </div>
    <div class="flex-row flex">
      <div class="h-full w-60 bg-secondary flex-0.5 mr-8 rounded-lg px-2 py-3">
        <div class="border border-y-0.5 border-x-0 border-t-0 py-2 border-regular">
          <p class="font-primary text-sm text-white ml-2">Sort Result By</p>
        </div>
        <div class="relative inline-block text-left">
          <button
            type="button"
            class="justify-center items-center px-4 py-2 text-sm font-thin rounded-md text-white bg-regular hover:bg-gray-50 mx-2 my-4"
            id="dropdown-button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Popularity
            <!-- Penambahan ikon dropdown di sini -->
            <svg class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 12l-6 6v-2l6-6 6 6v2l-6-6z" clip-rule="evenodd" />
            </svg>
          </button>

          <!-- Konten dropdown yang akan muncul saat tombol di klik -->
          <div
            class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <!-- Item dropdown -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="dropdown-item-1"
                >Item 1</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="dropdown-item-2"
                >Item 2</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="dropdown-item-3"
                >Item 3</a
              >
            </div>
          </div>
        </div>
        <div class="border border-y-0.5 border-x-0 py-2 border-regular">
          <p class="font-primary text-sm text-white ml-2">Genres</p>
        </div>
        <div
          class="flex-row flex justify-between mx-2 my-2"
          v-for="(genre, index) in genreData"
          :key="index"
        >
          <p class="font-thin text-sm text-white">{{ genre.name }}</p>
          <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
        <MovieCard
          v-for="(populer, index) in populerData"
          :key="index"
          :poster="`https://image.tmdb.org/t/p/w780/${populer.poster_path}`"
          :rating="`${populer.vote_average}`"
          :title="populer.title"
          :year="populer.release_date ? populer.release_date.slice(0, 4) : ''"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from '@/components/card/MovieCard.vue'
import { ref, onMounted } from 'vue'
export default {
  components: {
    MovieCard
  },
  setup() {
    const populerData = ref([])
    const genreData = ref([])
    const isDropdownOpen = ref(false);

    const getPopuler = async () => {
      try {
        const data = await apiService.get(`${API.GET_POPULER}`)
        populerData.value = data.data.results.slice(0, 10)
      } catch (error) {
        console.log(error)
      }
    }

    const getListGenre = async () => {
      try {
        const data = await apiService.get(`${API.GET_LIST_GENRE}`)
        genreData.value = data.data.genres
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await getPopuler()
      await getListGenre()

      const dropdownButton = document.getElementById('dropdown-button')

      dropdownButton.addEventListener('click', function () {
        const dropdownMenu = this.nextElementSibling
        dropdownMenu.classList.toggle('hidden')
        dropdownMenu.classList.toggle('block')
        const ariaExpanded = this.getAttribute('aria-expanded')
        this.setAttribute('aria-expanded', ariaExpanded === 'true' ? 'false' : 'true')
      })
    })
    return {
      populerData,
      genreData
    }
  }
}
</script>

<style scoped>
/* Tambahkan gaya CSS jika diperlukan */
</style>
