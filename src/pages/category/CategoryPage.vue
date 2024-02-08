<template>
  <div class="my-10 mx-8">
    <div class="flex flex-col mb-10">
      <div class="w-20 h-1.5 bg-red-100 mr-2 mb-3"></div>
      <h2 class="text-2xl text-white font-primary">Categories</h2>
    </div>
    <div class="flex-row flex">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
        <MovieCard
          v-for="(category, index) in categoryData"
          :key="index"
          :poster="`https://image.tmdb.org/t/p/w780/${category.poster_path}`"
          :rating="`${category.vote_average}`"
          :title="category.title"
          :year="category.release_date ? category.release_date.slice(0, 4) : ''"
          :movie_id="category.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from '@/components/card/MovieCard.vue'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    MovieCard
  },
  setup() {
    const categoryData = ref([])
    const router = useRouter()
    let actionId = router.currentRoute.value.params.action // Gunakan let untuk actionId

    const getCategory = async () => {
      try {
        const data = await apiService.get(`${API.GET_CATEGORY}&with_genres=${actionId}`)
        categoryData.value = data.data.results.slice(0, 10)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await getCategory()
    })

    watch(router.currentRoute, (to, from) => {
      const newActionId = to.params.action
      console.log('New actionId:', newActionId)
      actionId = newActionId // Atur ulang actionId saat route berubah
      getCategory()
    })

    return {
      categoryData
    }
  }
}
</script>

<style scoped>
/* Tambahkan gaya CSS jika diperlukan */
</style>
