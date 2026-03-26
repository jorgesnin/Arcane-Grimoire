<template>
  <div class="fixed top-5 right-5 z-50 flex flex-col gap-3">

    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="bg-amber-600 text-black px-4 py-2 rounded shadow-lg"
    >
      {{ toast.message }}
    </div>

  </div>
</template>

<script setup>
import { useToast } from "../composables/useToast"

const { toasts } = useToast()
</script>