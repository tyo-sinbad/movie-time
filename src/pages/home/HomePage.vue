<template>
  <div class="swiper-container mySwiper bg-red-100">
    <swiper
      :slides-per-view="4"
      :centered-slides="true"
      :grab-cursor="true"
      :pagination="{ clickable: true }"
      :modules="modules"
    >
      <swiper-slide class="bg-gray-100 flex justify-center items-center">Slide 1</swiper-slide>
      <swiper-slide class="bg-gray-100 flex justify-center items-center">Slide 2</swiper-slide>
      <swiper-slide class="bg-gray-100 flex justify-center items-center">Slide 3</swiper-slide>
      <swiper-slide class="bg-gray-100 flex justify-center items-center">Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'tailwindcss/tailwind.css' // Import Tailwind CSS

import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>
