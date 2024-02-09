<template>
  <div class="footer bg-secondary text-white">
    <div class="footer-content">
      <p class="footer-text">© 2021 MoovieTime. All rights reserved.</p>
      <img src="../../../assets/icons/moovietime-logo-grey.svg" />
      <p class="footer-text">Made with VueJS and TailwindCSS</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  @apply p-4 py-10;
}

.footer-content {
  @apply justify-between flex items-center mx-12;
}

.footer-text {
  @apply font-primary text-sm text-grey;
}
</style>
