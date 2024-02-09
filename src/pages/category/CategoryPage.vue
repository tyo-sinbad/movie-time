<template>
  <div class="category-section">
    <div class="category-heading">
      <div class="category-line"></div>
      <h2 class="category-title">Categories</h2>
    </div>
    <div class="category-grid">
      <div class="grid-container">
        <MovieCard
          v-for="(category, index) in categoryData"
          :key="index"
          :poster="`https://image.tmdb.org/t/p/w780/${category.poster_path}`"
          :rating="`${category.vote_average}`"
          :title="category.title"
          :year="category.release_date ? category.release_date.slice(0, 4) : ''"
          :movie_id="category.id"
          :loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import MovieCard from '@/components/card/MovieCard.vue'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    MovieCard
  },
  setup() {
    const categoryData = ref([] as any)
    const router = useRouter()
    let actionId = router.currentRoute.value.params.action
    const isLoading = ref(false)

    const getCategory = async () => {
      isLoading.value = true
      try {
        const data = await apiService.get(`${API.GET_CATEGORY}&with_genres=${actionId}`)
        categoryData.value = data.data.results.slice(0, 10)
      } catch (error) {
        console.log(error)
      } finally {
        isLoading.value = false
      }
    }

    onMounted(async () => {
      await getCategory()
    })

    watch(router.currentRoute, (to, from) => {
      const newActionId = to.params.action
      console.log('New actionId:', newActionId)
      actionId = newActionId
      getCategory()
    })

    return {
      categoryData,
      isLoading
    }
  }
}
</script>

<style scoped>
.category-section {
  @apply my-10 mx-8;
}

.category-heading {
  @apply flex flex-col mb-10;
}

.category-line {
  @apply w-20 h-1.5 bg-red-100 mr-2 mb-3;
}

.category-title {
  @apply text-2xl text-white font-primary;
}

.category-grid {
  @apply flex flex-row;
}

.grid-container {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 flex-1;
}
</style>
