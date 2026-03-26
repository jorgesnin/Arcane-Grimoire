<template>
  <select
    v-model="model"
    class="p-3 bg-[#1a120d] border border-amber-700 rounded text-amber-200"
  >
    <option value="">Todos</option>
    <option v-for="type in types" :key="type" :value="type">
      {{ type }}
    </option>
  </select>
</template>

<script setup>
const model = defineModel()

defineProps({
  types: {
    type: Array,
    default: () => []
  }
})
</script>