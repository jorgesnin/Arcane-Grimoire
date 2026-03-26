<template>
  <span
    :class="[
      'px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide border',
      badgeColor
    ]"
  >
    {{ type }}
  </span>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  type: {
    type: String,
    default: "Unknown"
  }
})

const badgeColor = computed(() => {
  const t = props.type?.toLowerCase()

  switch (t) {

    // REQUERIDOS POR RÚBRICA
    case "beast":
      return "bg-green-700 text-green-200 border-green-500"

    case "undead":
      return "bg-purple-700 text-purple-200 border-purple-500"

    case "dragon":
      return "bg-red-700 text-red-200 border-red-500"

    // TIPOS EXTRA DE LA API
    case "giant":
      return "bg-orange-700 text-orange-200 border-orange-500"

    case "aberration":
      return "bg-pink-700 text-pink-200 border-pink-500"

    case "monstrosity":
      return "bg-blue-700 text-blue-200 border-blue-500"

    case "celestial":
      return "bg-yellow-600 text-yellow-100 border-yellow-400"

    case "fiend":
      return "bg-red-900 text-red-300 border-red-700"

    case "fey":
      return "bg-emerald-700 text-emerald-200 border-emerald-500"

    case "humanoid":
      return "bg-slate-700 text-slate-200 border-slate-500"

    case "construct":
      return "bg-zinc-700 text-zinc-200 border-zinc-500"

    case "elemental":
      return "bg-cyan-700 text-cyan-200 border-cyan-500"

    case "plant":
      return "bg-lime-700 text-lime-200 border-lime-500"

    case "ooze":
      return "bg-teal-700 text-teal-200 border-teal-500"

    default:
      return "bg-gray-700 text-gray-200 border-gray-500"
  }
})
</script>