<template>
  <div class="swiper-container mySwiper bg-secondary py-12">
    <swiper
      :slides-per-view="5"
      :centered-slides="true"
      :grab-cursor="true"
      :space-between="30"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="bg-gray-100 flex justify-center items-center"
        v-for="(banner, index) in bannerData"
        :key="index"
        ><div class="bg-gray-100 flex justify-center items-center">
          <!-- {{ banner.title }} -->
          <img :src="`https://image.tmdb.org/t/p/w780/${banner.poster_path}`" :alt="`${banner.title}`" />
          <div class="">
            <h1>{{ banner.title }}</h1>
          </div>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'tailwindcss/tailwind.css'

import { Pagination } from 'swiper/modules'
import { ref, onMounted } from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const bannerData = ref([])
    const getBanner = async () => {
      try {
        const data = await apiService.get(`${API.GET_BANNER}`)
        bannerData.value = data.data.results.slice(0, 4)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await getBanner()
      console.log('test:', bannerData.value)
    })
    return {
      modules: [Pagination],
      onMounted,
      bannerData
    }
  }
}
</script>

<style>
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
</style>
