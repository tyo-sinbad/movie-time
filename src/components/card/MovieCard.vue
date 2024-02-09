<template>
  <div v-if="loading" class="skeleton-loader">
    <div class="skeleton-image"></div>
    <div class="skeleton-overlay"></div>
    <div class="skeleton-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-year"></div>
    </div>
  </div>
  <div v-else class="custom-card" @click="navigateToDetail(movie_id)">
    <img :src="poster" alt="Movie Poster" class="custom-image" />
    <div class="custom-overlay">
      <span class="custom-rating">{{ rating }}</span>
    </div>
    <div class="custom-content">
      <h2 class="custom-title">{{ title }}</h2>
      <p class="custom-year">{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poster: String,
    rating: String,
    title: String,
    year: String,
    movie_id: String,
    loading: Boolean
  },
  methods: {
    navigateToDetail(id) {
      localStorage.setItem('previousPage', this.$route.name)
      this.$router.push({ name: 'detail', params: { movie_id: id } })
    }
  }
}
</script>

<style scoped>
.custom-card {
  @apply relative overflow-hidden cursor-pointer;
}

.custom-image {
  @apply w-full h-full object-cover;
}

.custom-overlay {
  @apply absolute top-4 right-4;
}

.custom-rating {
  @apply text-lg font-bold text-white;
}

.custom-content {
  @apply p-4;
}

.custom-title {
  @apply text-lg mb-1 font-primary text-white break-words;
}

.custom-year {
  @apply text-sm text-gray-400 font-thin;
}

/* Skeleton Loader Styles */
.skeleton-loader {
  @apply relative overflow-hidden bg-gray-200 rounded-lg shadow-md;
}

.skeleton-image {
  @apply w-96 h-64 bg-gray-300;
}

.skeleton-overlay {
  @apply absolute top-4 right-4 w-16 h-8 bg-gray-400 rounded-lg;
}

.skeleton-content {
  @apply p-4;
}

.skeleton-title {
  @apply w-full h-6 bg-gray-300 mb-2;
}

.skeleton-year {
  @apply w-24 h-4 bg-gray-300;
}
</style>
