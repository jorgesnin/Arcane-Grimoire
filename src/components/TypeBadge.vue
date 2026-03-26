<template>
  <span
    :class="[
      'px-3 py-1 rounded-md text-xs font-semibold border',
      colorClass
    ]"
  >
    {{ type }}
  </span>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  type: String
})

const colorClass = computed(() => {
  switch (props.type) {
    case "Beast":
      return "bg-green-900 text-green-300 border-green-600"

    case "Undead":
      return "bg-purple-900 text-purple-300 border-purple-600"

    case "Dragon":
      return "bg-red-900 text-red-300 border-red-600"

    case "Spirit":
      return "bg-blue-900 text-blue-300 border-blue-600"

    case "Construct":
      return "bg-amber-900 text-amber-300 border-amber-600"

    default:
      return "bg-gray-800 text-gray-300 border-gray-600"
  }
})
</script>