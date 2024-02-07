<template>
  <div class="relative overflow-hidden bg-transparent rounded-lg">
    <img :src="poster" alt="Movie Poster" class="w-full h-100 object-cover" />
    <div class="absolute top-4 right-4">
      <span class="text-white text-lg font-bold">{{ rating }}</span>
    </div>
    <div class="p-4">
      <h2 class="text-lg text-white mb-1 break-words font-primary">{{ title }}</h2>
      <p class="text-gray-400 font-thin text-sm">{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poster: String,
    rating: String,
    title: String,
    year: String
  }
}
</script>

<style scoped>
.p-4 {
  background-color: transparent;
  text-align: left;
}
</style>
