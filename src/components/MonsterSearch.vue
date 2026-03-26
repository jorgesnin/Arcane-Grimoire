<template>
  <input
    v-model="model"
    type="text"
    placeholder="Buscar monstruo..."
    class="mb-6 w-full p-3 rounded-lg bg-[#2a1e18] border border-amber-700 text-amber-200 placeholder-amber-500 focus:outline-none"
  />
</template>

<script setup>
const model = defineModel()
</script>