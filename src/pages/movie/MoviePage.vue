<template>
  <div class="my-10 mx-8">
    <div class="flex flex-col mb-10">
      <div class="w-20 h-1.5 bg-red-100 mr-2 mb-3"></div>
      <h2 class="text-2xl text-white font-primary">Movies</h2>
    </div>
    <div class="flex-row flex">
      <div class="h-full w-60 bg-secondary flex-0.5 mr-8 rounded-lg px-2 py-3">
        <div class="border border-y-0.5 border-x-0 border-t-0 py-2 border-regular">
          <p class="font-primary text-sm text-white ml-2">Sort Result By</p>
        </div>
        <div class="relative inline-block text-left w-full pr-4">
          <button
            type="button"
            class="flex flex-row justify-center w-full items-center px-4 py-2 text-sm font-thin rounded-md text-white bg-regular hover:bg-grey mx-2 my-4"
            id="dropdown-button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="flex items-center justify-between w-full">
              <span class="font-primary text-sm text-white">{{ selectedFilter }}</span>
              <font-awesome-icon
                :icon="['fas', isDropdownOpen ? 'fa-caret-up' : 'fa-caret-down']"
                class="fa-sm mr-2 text-sm"
              />
            </div>
          </button>

          <div
            class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900 font-primary text-sm overflow-hidden whitespace-nowrap"
                role="menuitem"
                tabindex="-1"
                id="dropdown-item-1"
                v-for="(filter, index) in items"
                :key="index"
                @click="handleFilterSelect(filter)"
                style="text-overflow: ellipsis; width: calc(100% - 1.5rem)"
                >{{ filter.name }}</a
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
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-gray-600 bg-red-500"
            @change="handleGenreSelect(genre.id)"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
        <MovieCard
          v-for="(movie, index) in movieData"
          :key="index"
          :poster="`https://image.tmdb.org/t/p/w780/${movie.poster_path}`"
          :rating="`${movie.vote_average}`"
          :title="movie.title"
          :year="movie.release_date ? movie.release_date.slice(0, 4) : ''"
          :movie_id="movie.id"
          :loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import MovieCard from '@/components/card/MovieCard.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    MovieCard
  },
  data() {
    return {
      items: [
        { name: 'Popularity Ascending', query: 'popularity.asc' },
        { name: 'Popularity Descending', query: 'popularity.desc' },
        { name: 'Release Date Ascending', query: 'release_date.asc' },
        { name: 'Release Date Descending', query: 'release_date.desc' },
        { name: 'Rating Ascending', query: 'rating.asc' },
        { name: 'Rating Descending', query: 'rating.desc' }
      ]
    }
  },
  setup() {
    const movieData = ref([] as any)
    const genreData = ref([] as any)
    const isDropdownOpen = ref(false)
    const selectedFilter = ref('Filter')
    const selectedFilterQuery = ref('')
    const selectedGenres = ref([] as any)
    const router = useRouter()
    const actionId = router.currentRoute.value.params.action
    const apiUrl = ref(`${API.GET_CATEGORY}`)
    const isLoading = ref(false)

    const getMovie = async () => {
      isLoading.value = true
      try {
        const data = await apiService.get(apiUrl.value)
        movieData.value = data.data.results.slice(0, 10)
      } catch (error) {
        console.log(error)
      } finally {
        isLoading.value = false
      }
    }

    const getListGenre = async () => {
      isLoading.value = true
      try {
        const data = await apiService.get(`${API.GET_LIST_GENRE}`)
        genreData.value = data.data.genres
      } catch (error) {
        console.log(error)
      } finally {
        isLoading.value = false
      }
    }

    const updateApiUrl = (sortParam = '') => {
      let genresParam = ''
      if (selectedGenres.value.length > 0) {
        genresParam = `&with_genres=${selectedGenres.value.join(',')}`
      }
      apiUrl.value = `${API.GET_CATEGORY}${sortParam}${genresParam}`
      getMovie()
    }

    const handleFilterSelect = (filter) => {
      selectedFilter.value = filter.name
      selectedFilterQuery.value = filter.query
      isDropdownOpen.value = true

      let sortParam = ''
      if (filter.query) sortParam = `&sort_by=${filter.query}`
      updateApiUrl(sortParam)
    }
    const handleGenreSelect = (genre) => {
      const index = selectedGenres.value.indexOf(genre)
      if (index === -1) {
        selectedGenres.value.push(genre)
      } else {
        selectedGenres.value.splice(index, 1)
      }
      let sortParam = ''
      if (selectedFilterQuery.value) sortParam = `&sort_by=${selectedFilterQuery.value}`
      updateApiUrl(sortParam)
    }

    onMounted(async () => {
      await getMovie()
      await getListGenre()
      const dropdownButton = document.getElementById('dropdown-button')

      dropdownButton.addEventListener('click', function () {
        const dropdownMenu = this.nextElementSibling
        dropdownMenu.classList.toggle('hidden')
        dropdownMenu.classList.toggle('block')
        const ariaExpanded = this.getAttribute('aria-expanded')
        this.setAttribute('aria-expanded', ariaExpanded === 'true' ? 'false' : 'true')

        isDropdownOpen.value = !isDropdownOpen.value
      })
    })
    return {
      movieData,
      genreData,
      isDropdownOpen,
      selectedFilter,
      handleFilterSelect,
      handleGenreSelect,
      isLoading
    }
  }
}
</script>
