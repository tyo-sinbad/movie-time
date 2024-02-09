<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-regular rounded-lg shadow-lg w-80">
      <div class="flex justify-end p-2">
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700 focus:outline-none">
          &times;
        </button>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
