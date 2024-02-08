<template>
  <div v-if="movieData">
    <img
      :src="
        movieData.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}` : ''
      "
      class="w-full object-cover object-top flex flex-1 h-[500px] mt-[-80px]"
    />
    <div class="z-60 relative mt-[-250px]">
      <div class="mb-4 flex flex-row absolute bg-regular w-full p-4 top-[120px] bg-opacity-80">
        <div class="flex flex-row border-r border-r-slate-400 pr-8 ml-[300px]">
          <font-awesome-icon :icon="['fas', 'star']" class="text-orange-300 mr-4 w-4 h-4" />
          <p class="text-3xl font-semibold font-primary text-white">{{ movieData.vote_average }}</p>
          <div class="ml-4">
            <p class="text-slate-400 font-primary text-xs mb-1">USER SCORE</p>
            <p class="text-white font-primary text-xs">{{ movieData.vote_count }} VOTES</p>
          </div>
        </div>
        <div class="border-r border-r-slate-400 px-10">
          <p class="text-slate-400 font-primary text-xs mb-1">STATUS</p>
          <p class="text-white font-primary text-xs">{{ movieData.status }}</p>
        </div>
        <div class="border-r border-r-slate-400 px-10">
          <p class="text-slate-400 font-primary text-xs mb-1">LANGUANGE</p>
          <p class="text-white font-primary text-xs">{{ movieData.original_language }}</p>
        </div>
        <div class="border-r border-r-slate-400 px-10">
          <p class="text-slate-400 font-primary text-xs mb-1">BUDGET</p>
          <p class="text-white font-primary text-xs">
            ${{ previousPage === 'tv' ? 0 : movieData.budget }}
          </p>
        </div>
        <div class="px-10">
          <p class="text-slate-400 font-primary text-xs mb-1">PRODUCTION</p>
          <p class="text-white font-primary text-xs">
            {{
              previousPage === 'tv'
                ? movieData.networks[0].name
                : movieData.production_companies[0].name
            }}
          </p>
        </div>
      </div>
      <div class="flex flex-row mx-16 mt-16 mb-5">
        <div>
          <img
            :src="
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : ''
            "
            class="h-[280px] w-[336px] object-cover object-top z-50 relative"
          />
        </div>
        <div class="ml-8">
          <div class="mb-8">
            <p class="text-lg text-white font-primary mb-1">
              {{
                previousPage === 'tv'
                  ? movieData.first_air_date.slice(0, 4)
                  : movieData.release_date.slice(0, 4)
              }}
            </p>
            <p class="text-3xl text-white font-primary font-semibold mb-1">
              {{ movieData.original_title }}
            </p>
            <p class="text-md text-white font-primary">
              {{
                movieData.genres.length > 1
                  ? movieData.genres.map((item) => item.name).join(', ')
                  : movieData.genres[0].name
              }}
            </p>
          </div>
          <div>
            <p class="text-sm font-primary font-semibold text-red-500 mt-[100px]">OVERVIEW</p>
            <p class="text-sm font-primary">
              {{ movieData.overview }}
            </p>
          </div>
        </div>
      </div>
      <div class="mx-16">
        <div>
          <p class="text-sm font-primary font-semibold text-red-500">REVIEWS</p>
        </div>
        <div class="grid grid-cols-2 gap-8 py-4">
          <div class="mb-4 bg-gray-100 p-4 rounded-lg">
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row items-center">
                <img
                  src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
                  class="w-[48px] h-[48px] rounded-full"
                />
                <div class="ml-3">
                  <p class="text-base font-bold text-black font-primary">SWITCH.</p>
                  <p class="text-xs text-gray-400 font-primary">December 18, 2020</p>
                </div>
              </div>
              <div class="p-2 bg-gray-200 rounded flex flex-row">
                <font-awesome-icon :icon="['fas', 'star']" class="text-orange-300 mr-1 w-4 h-4" />
                <p class="text-3xl font-semibold font-primary">7.0</p>
              </div>
            </div>
            <div class="mt-3">
              <p class="italic font-primary text-sm">
                I love most superhero movies, but Diana is the action hero lead I didn’t know I
                needed to see. I loved watching her (and the Amazons in general) fight; I loved her
                conviction in what she believed in. I loved that she was beautiful and smart and
                strong, but still so kind and caring. I am so glad an entire generation of girls got
                to see her. I love most superhero movies, but Diana is the action hero lead I didn’t
                know I needed to see. I loved watching her (and the Amazons in general) fight; I
                loved her conviction in what she believed in. I loved that she was beautiful and
                smart and strong, but still so kind and caring. I am so glad an entire generation of
                girls got to see her.
              </p>
            </div>
          </div>
          <div class="mb-4 bg-gray-100 p-4 rounded-lg">
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row items-center">
                <img
                  src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
                  class="w-[48px] h-[48px] rounded-full"
                />
                <div class="ml-3">
                  <p class="text-base font-bold text-black font-primary">SWITCH.</p>
                  <p class="text-xs text-gray-400 font-primary">December 18, 2020</p>
                </div>
              </div>
              <div class="p-2 bg-gray-200 rounded flex flex-row">
                <font-awesome-icon :icon="['fas', 'star']" class="text-orange-300 mr-1 w-4 h-4" />
                <p class="text-3xl font-semibold font-primary">7.0</p>
              </div>
            </div>
            <div class="mt-3">
              <p class="italic font-primary text-sm">
                I love most superhero movies, but Diana is the action hero lead I didn’t know I
                needed to see. I loved watching her (and the Amazons in general) fight; I loved her
                conviction in what she believed in. I loved that she was beautiful and smart and
                strong, but still so kind and caring. I am so glad an entire generation of girls got
                to see her. I love most superhero movies, but Diana is the action hero lead I didn’t
                know I needed to see. I loved watching her (and the Amazons in general) fight; I
                loved her conviction in what she believed in. I loved that she was beautiful and
                smart and strong, but still so kind and caring. I am so glad an entire generation of
                girls got to see her.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="px-16 bg-gray-800 py-8">
        <p class="mb-6 font-primary text-white font-semibold">RECOMMENDATION MOVIES</p>
        <div id="app" class="grid grid-cols-5 gap-4">
          <!-- Replace the array below with your actual list of movie data -->
          <MovieCard
            v-for="(rec, index) in reccomendation"
            :key="index"
            :poster="`https://image.tmdb.org/t/p/w780/${rec.poster_path}`"
            :rating="rec.rating"
            :title="rec.title"
            :year="rec.year"
            :movie_id="rec.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/card/MovieCard.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'DetailPage',
  components: {
    MovieCard
  },
  setup() {
    const router = useRouter()
    let movieId = router.currentRoute.value.params.movie_id
    const movieData = ref(null)
    const reccomendation = ref([])
    const previousPage = localStorage.getItem('previousPage')

    const getDetailMovie = async () => {
      try {
        const data = await apiService.get(
          `/3/${previousPage === 'tv' ? 'tv' : 'movie'}/${movieId}?api_key=cf8f6a53d30a9b0ff444944a5383c213`
        )
        movieData.value = data.data
      } catch (error) {
        console.log(error)
      }
    }

    const getReccomendation = async () => {
      try {
        const data = await apiService.get(
          `/3/${previousPage === 'tv' ? 'tv' : 'movie'}/${movieId}/recommendations?api_key=cf8f6a53d30a9b0ff444944a5383c213`
        )
        reccomendation.value = data.data.results.slice(0, 5)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await getDetailMovie()
      await getReccomendation()
    })

    watch(router.currentRoute, (to, from) => {
      const newMovieId = parseInt(to.params.movie_id)
      movieId = newMovieId // Atur ulang movieId saat route berubah
      getDetailMovie()
      getReccomendation()
    })

    return {
      movieId,
      movieData,
      reccomendation,
      previousPage
    }
  }
}
</script>


<style scoped>
/* No custom styles needed, only Tailwind CSS classes */
.banner-container {
  @apply w-full h-[500px] overflow-hidden;
}

.banner-image {
  @apply w-full h-full object-cover;
}
</style>
