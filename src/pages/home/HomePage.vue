<template>
  <div class="bg-secondary py-12 align-center overflow-x-auto">
    <swiper
      :slides-per-view="5"
      :centered-slides="true"
      :grab-cursor="true"
      :space-between="300"
      :pagination="{ clickable: true }"
      :modules="modules"
      :initial-slide="1"
    >
      <swiper-slide
        class="bg-gray-100 flex justify-center items-center mr-60"
        v-for="(banner, index) in bannerData"
        :key="index"
        ><div class="bg-gray-100 flex justify-center items-center">
          <div class="flex flex-row w-160">
            <img
              :src="`https://image.tmdb.org/t/p/w780/${banner.poster_path}`"
              alt="Banner Image"
            />
            <div class="bg-black my-3">
              <div class="w-60">
                <div class="flex flex-row items-center">
                  <font-awesome-icon
                    :icon="['fas', 'fa-star']"
                    class="fa-sm ml-4 mr-1 text-yellow-500 size-3"
                  />
                  <h1 class="text-white font-primary font-semibold">{{ banner.vote_average }}</h1>
                </div>
                <h1 class="text-white font-semibold ml-4 text-2xl mt-1">{{ banner.title }}</h1>
                <div class="flex flex-row items-center mt-1 ml-4">
                  <h1 class="text-white font-primary font-thin text-sm">
                    {{ banner.release_date.slice(0, 4) }}
                  </h1>
                  <div class="dot mx-1"></div>
                  <h1 class="text-white font-primary font-thin text-sm">
                    {{ banner.original_language }}
                  </h1>
                </div>
              </div>
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
.home-page {
  text-align: center;
  margin-top: 100px;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
/* Mengatur dots */
.swiper-pagination {
  display: flex;
  justify-content: center;
}

/* Dots yang tidak aktif */
.swiper-pagination-bullet {
  width: 12px; /* Ukuran dots */
  height: 12px; /* Ukuran dots */
  background-color: rgba(153, 153, 153, 1); /* Warna dots tidak aktif */
  opacity: 1; /* Tidak transparan */
  margin-right: 8px; /* Jarak antara dots */
  border-radius: 50%; /* Membuat dots berbentuk bulat */
}

/* Dots yang aktif (berbentuk garis) */
.swiper-pagination-bullet-active {
  background-color: transparent; /* Menghilangkan background dots */
  position: relative; /* Mengatur posisi relatif */
  margin-left: 8px; /* Jarak antara dots */
}

.swiper-pagination-bullet-active::before {
  content: '';
  position: absolute; /* Mengatur posisi absolut */
  left: -22px; /* Menggeser garis agar tidak bertumpuk dengan dots */
  top: 0; /* Posisi garis relatif terhadap dots */
  display: block;
  width: 52px; /* Panjang garis */
  border-radius: 20px;
  height: 12px; /* Ketebalan garis */
  background-color: #f00; /* Warna garis */
}
.dot {
  width: 6px; /* Lebar */
  height: 6px; /* Tinggi */
  background-color: #8d9194; /* Warna titik */
  border-radius: 50%; /* Membuat titik berbentuk bulat */
}
</style>
