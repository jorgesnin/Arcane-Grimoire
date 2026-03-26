<template>
  <select
    v-model="model"
    class="mb-6 p-2 bg-[#1a120d] border border-amber-700 text-amber-200"
  >
    <option value="">Todos</option>
    <option v-for="type in types" :key="type" :value="type">
      {{ type }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  types: Array
})

const model = defineModel()
</script>