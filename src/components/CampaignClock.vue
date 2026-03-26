<template>
  <div class="bg-[#1a120d] border border-amber-700 rounded-xl p-6">
    <h2 class="text-amber-400 mb-2">
      Día de Campaña
    </h2>

    <p class="text-3xl font-bold text-amber-200">
      {{ day }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const day = ref(1)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    day.value++
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>