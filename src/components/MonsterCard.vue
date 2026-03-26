<template>
  <div
    v-glow
    class="bg-gradient-to-br from-[#2a1e18] to-[#1a120d]
           text-[#eadcc6]
           border border-amber-800
           p-4 rounded-xl
           shadow-lg shadow-black/60
           hover:shadow-amber-900/50
           transition-all duration-300"
  >

    <!-- img-->
    <div class="w-full h-40 mb-3 rounded-lg border border-amber-900 overflow-hidden">

      <img
        :src="imageSrc"
        @error="handleError"
        class="w-full h-full object-cover"
      />

    </div>

    <!-- nombre -->
    <h3 class="text-lg font-bold mb-2 tracking-wide text-amber-300">
      {{ monster.name }}
    </h3>

    <!-- tipo -->
    <TypeBadge :type="monster.type" />

    <!-- stats -->
    <div class="text-sm mt-3 mb-4 flex gap-4 items-center text-amber-200">

      <span class="flex items-center gap-1">
        <font-awesome-icon icon="heart" />
        {{ monster.hp || "-" }}
      </span>

      <span class="flex items-center gap-1">
        <font-awesome-icon icon="shield-halved" />
        {{ monster.ac || "-" }}
      </span>

      <span class="flex items-center gap-1">
        <font-awesome-icon icon="skull" />
        {{ monster.challenge_rating || "-" }}
      </span>

    </div>

    <!-- acciones -->
    <div class="flex gap-3 mt-2">

      <RouterLink
        :to="`/monster/${monster.slug}`"
        class="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-white rounded transition text-sm"
      >
        Ver
      </RouterLink>

      <button
        @click="$emit('open-modal', monster)"
        class="px-3 py-1 border border-amber-700 text-amber-300 hover:bg-amber-700 hover:text-white transition rounded text-sm flex items-center gap-1"
      >
        <font-awesome-icon icon="book" />
        Grimorio
      </button>

    </div>

  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import TypeBadge from "./TypeBadge.vue"
import placeholder from "../assets/monster-placeholder.jpg"

const props = defineProps({
  monster: Object
})

defineEmits(["open-modal"])

// img reactiva
const imageSrc = ref(placeholder)

// cuando cambia el monster
watch(
  () => props.monster,
  (newMonster) => {
    imageSrc.value = newMonster?.img_main || placeholder
  },
  { immediate: true }
)

// si fallav img
function handleError() {
  imageSrc.value = placeholder
}
</script>