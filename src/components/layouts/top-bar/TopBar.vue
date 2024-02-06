<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-10 left-0">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex-row flex">
          <!-- Logo -->
          <div>
            <a
              href="#"
              class="flex items-center text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              <span>Your Logo</span>
            </a>
          </div>
          <!-- Search Input -->
          <div class="hidden md:flex ml-4 relative">
            <input
              type="text"
              placeholder="Search..."
              class="bg-gray-100 border-2 border-gray-200 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full flex"
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <!-- Font Awesome search icon -->
              <i class="fas fa-search text-gray-400"></i>
            </button>
          </div>
        </div>

        <!-- Menu Items -->
        <div class="hidden md:flex space-x-4">
          <a
            href="#"
            class="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >Home</a
          >
          <a
            href="#"
            class="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >About</a
          >
          <a
            href="#"
            class="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >Services</a
          >
          <a
            href="#"
            class="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavbar'
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
