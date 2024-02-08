<template>
  <div class="bg-secondary py-12 align-center overflow-x-auto">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(banner, index) in bannerData"
        :key="index"
        @click="navigateToDetail(banner.id)"
        ><div class="flex-1 item-center w-full h-full">
          <img
            :src="`https://image.tmdb.org/t/p/w780/${banner.poster_path}`"
            alt="{{banner.title}}"
          />
        </div>
        <div class="flex-1 flex items-center bg-black h-96">
          <div>
            <div class="flex-row flex items-center">
              <font-awesome-icon
                :icon="['fas', 'fa-star']"
                class="fa-sm mx-4 mr-1 text-yellow-500 size-4"
              />
              <h1 class="text-white font-primary font-semibold">{{ banner.vote_average }}</h1>
            </div>
            <div class="mx-4">
              <h1 class="text-white font-semibold text-2xl mt-1">{{ banner.title }}</h1>
            </div>
            <div class="flex flex-row items-center mt-1 mx-4">
              <h1 class="text-white font-primary text-sm">
                {{ banner.release_date.slice(0, 4) }}
              </h1>
              <div class="dot mx-1"></div>
              <h1 class="text-white font-primary text-sm">
                {{ banner.original_language }}
              </h1>
            </div>
            <div class="mt-1 mx-4">
              <h1 class="text-white font-primary text-xs line-clamp-6">
                {{ banner.overview }}
              </h1>
            </div>
          </div>
        </div></swiper-slide
      >
    </swiper>
  </div>

  <div class="home-page">
    <div class="flex-row flex justify-between mx-8">
      <div>
        <div class="flex w-24 h-2 bg-red-100 mb-2"></div>
        <p class="text-2xl text-white font-primary">Discover Movies</p>
      </div>
      <div class="flex-row flex">
        <div
          :class="{
            'bg-red-200': activeTab === 'popularity',
            'bg-secondary': activeTab !== 'popularity'
          }"
          class="mr-4 justify-center h-8 px-4 rounded-2xl flex items-center cursor-pointer"
          @click="toggleTab('popularity')"
        >
          <p class="font-primary text-sm text-white">Popularity</p>
        </div>
        <div
          :class="{
            'bg-red-200': activeTab === 'releaseDate',
            'bg-secondary': activeTab !== 'releaseDate'
          }"
          class="mr-4 justify-center h-8 px-4 rounded-2xl flex items-center cursor-pointer"
          @click="toggleTab('releaseDate')"
        >
          <p class="font-primary text-sm text-white">Release Date</p>
        </div>
      </div>
    </div>
    <div id="app" class="grid grid-cols-5 gap-4 p-8">
      <MovieCard
        v-for="(populer, index) in populerData"
        :key="index"
        :poster="`https://image.tmdb.org/t/p/w780/${populer.poster_path}`"
        :rating="`${populer.vote_average}`"
        :title="populer.title"
        :year="populer.release_date.slice(0, 4)"
        :movie_id="populer.id"
      />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'tailwindcss/tailwind.css'
import MovieCard from '@/components/card/MovieCard.vue'

import { Pagination } from 'swiper/modules'
import { ref, onMounted } from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    MovieCard
  },
  methods: {
    navigateToDetail(id) {
      this.$router.push({ name: 'detail', params: { movie_id: id } })
    }
  },
  setup() {
    const bannerData = ref([])
    const populerData = ref([])
    const activeTab = ref('popularity')

    const getBanner = async () => {
      try {
        const data = await apiService.get(`${API.GET_BANNER}`)
        bannerData.value = data.data.results.slice(0, 4)
      } catch (error) {
        console.log(error)
      }
    }

    const getPopuler = async () => {
      try {
        const data = await apiService.get(`${API.GET_POPULER}`)
        populerData.value = data.data.results.slice(0, 10)
      } catch (error) {
        console.log(error)
      }
    }

    const getNewMovie = async () => {
      try {
        const data = await apiService.get(`${API.GET_NEW_MOVIE}`)
        populerData.value = data.data.results.slice(0, 10)
      } catch (error) {
        console.log(error)
      }
    }

    const toggleTab = (tab) => {
      activeTab.value = tab
      if (tab === 'popularity') {
        getPopuler()
      } else if (tab === 'releaseDate') {
        getNewMovie()
      }
    }

    onMounted(async () => {
      await getBanner()
      await getPopuler()
      console.log('banner:', bannerData)
    })
    return {
      modules: [Pagination],
      onMounted,
      bannerData,
      populerData,
      activeTab,
      toggleTab
    }
  }
}
</script>

<style>
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 4px;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  width: 52px;
  height: 10px;
  background-color: #e74c3c;
  border-radius: 8px;
  opacity: 1;
}

.swiper-pagination {
  bottom: 10px; /* Atur posisi dots */
}
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family:
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 40%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 48px;
}
</style>
