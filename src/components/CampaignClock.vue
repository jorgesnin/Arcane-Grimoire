<template>
  <div class="border border-amber-800 p-6 rounded-xl">

    <p class="text-amber-300">Día de Campaña</p>

    <p class="text-4xl text-amber-400 mt-2">
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