<template>
  <input
    v-model="model"
    type="text"
    placeholder="Buscar monstruo..."
    class="w-full mb-4 p-2 bg-[#1a120d] border border-amber-700 text-amber-200"
  />
</template>

<script setup>
const model = defineModel()
</script>