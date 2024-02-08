<template>
  <img
    src="https://image.tmdb.org/t/p/w1280//f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg"
    class="w-full object-cover object-top flex flex-1 h-[500px] mt-[-80px]"
  />
  <div class="z-60 relative mt-[-250px]">
    <div class="mb-4 flex flex-row absolute bg-regular w-full p-4 top-[120px] bg-opacity-80">
      <div class="flex flex-row border-r border-r-slate-400 pr-8 ml-[300px]">
        <font-awesome-icon :icon="['fas', 'star']" class="text-orange-300 mr-4 w-4 h-4" />
        <p class="text-3xl font-semibold font-primary text-white">7.0</p>
        <div class="ml-4">
          <p class="text-slate-400 font-primary text-xs mb-1">USER SCORE</p>
          <p class="text-white font-primary text-xs">3621 VOTES</p>
        </div>
      </div>
      <div class="border-r border-r-slate-400 px-10">
        <p class="text-slate-400 font-primary text-xs mb-1">STATUS</p>
        <p class="text-white font-primary text-xs">RELEASED</p>
      </div>
      <div class="border-r border-r-slate-400 px-10">
        <p class="text-slate-400 font-primary text-xs mb-1">LANGUANGE</p>
        <p class="text-white font-primary text-xs">ENGLISH</p>
      </div>
      <div class="border-r border-r-slate-400 px-10">
        <p class="text-slate-400 font-primary text-xs mb-1">BUDGET</p>
        <p class="text-white font-primary text-xs">$200,000,000.00</p>
      </div>
      <div class="px-10">
        <p class="text-slate-400 font-primary text-xs mb-1">PRODUCTION</p>
        <p class="text-white font-primary text-xs">DC ENTERTAINMENT</p>
      </div>
    </div>
    <div class="flex flex-row mx-16 mt-16 mb-5">
      <div>
        <img
          src="https://i.ebayimg.com/images/g/N~4AAOSwcxFjf5L3/s-l1200.webp"
          class="h-[280px] w-[336px] object-cover object-top z-50 relative"
        />
      </div>
      <div class="ml-8">
        <div class="mb-8">
          <p class="text-lg text-white font-primary mb-1">2020</p>
          <p class="text-3xl text-white font-primary font-semibold mb-1">Wonder Woman 1984</p>
          <p class="text-md text-white font-primary">Fantasy, Action, Adventure</p>
        </div>
        <div>
          <p class="text-sm font-primary font-semibold text-red-500 mt-[100px]">OVERVIEW</p>
          <p class="text-sm font-primary">
            I love most superhero movies, but Diana is the action hero lead I didn’t know I needed
            to see. I loved watching her (and the Amazons in general) fight; I loved her conviction
            in what she believed in. I loved that she was beautiful and smart and strong, but still
            so kind and caring. I am so glad an entire generation of girls got to see her.
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
              I love most superhero movies, but Diana is the action hero lead I didn’t know I needed
              to see. I loved watching her (and the Amazons in general) fight; I loved her
              conviction in what she believed in. I loved that she was beautiful and smart and
              strong, but still so kind and caring. I am so glad an entire generation of girls got
              to see her. I love most superhero movies, but Diana is the action hero lead I didn’t
              know I needed to see. I loved watching her (and the Amazons in general) fight; I loved
              her conviction in what she believed in. I loved that she was beautiful and smart and
              strong, but still so kind and caring. I am so glad an entire generation of girls got
              to see her.
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
              I love most superhero movies, but Diana is the action hero lead I didn’t know I needed
              to see. I loved watching her (and the Amazons in general) fight; I loved her
              conviction in what she believed in. I loved that she was beautiful and smart and
              strong, but still so kind and caring. I am so glad an entire generation of girls got
              to see her. I love most superhero movies, but Diana is the action hero lead I didn’t
              know I needed to see. I loved watching her (and the Amazons in general) fight; I loved
              her conviction in what she believed in. I loved that she was beautiful and smart and
              strong, but still so kind and caring. I am so glad an entire generation of girls got
              to see her.
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
          v-for="(movie, index) in movies"
          :key="index"
          :poster="movie.poster"
          :rating="movie.rating"
          :title="movie.title"
          :year="movie.year"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/card/MovieCard.vue'

export default {
  name: 'HomePage',
  component: {
    MovieCard
  },
  data() {
    return {
      movies: [
        {
          poster: 'https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
          rating: '8.5',
          title: 'Movie Title 1',
          year: '2022'
        },
        {
          poster: 'https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
          rating: '7.8',
          title: 'Movie Title 2',
          year: '2020'
        },
        {
          poster: 'https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
          rating: '8.5',
          title: 'Movie Title 1',
          year: '2022'
        },
        {
          poster: 'https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
          rating: '7.8',
          title: 'Movie Title 2',
          year: '2020'
        },
        {
          poster: 'https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
          rating: '7.8',
          title: 'Movie Title 2',
          year: '2020'
        }
      ]
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
