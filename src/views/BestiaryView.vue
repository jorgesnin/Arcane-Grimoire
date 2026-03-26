<template>
  <div>

    <h1 class="text-3xl text-amber-400 font-bold mb-6">
      Bestiario
    </h1>

    <MonsterSearch v-model="bestiary.searchQuery" />

    <MonsterFilter
      v-model="bestiary.selectedType"
      :types="types"
    />

    <!-- skeleton -->
    <div v-if="bestiary.isLoading" class="grid grid-cols-3 gap-6">
      <MonsterSkeleton v-for="n in 6" :key="n" />
    </div>

    <!-- lista -->
    <div
      v-else-if="bestiary.filteredMonsters.length > 0"
      class="grid grid-cols-3 gap-6"
    >
      <MonsterCard
        v-for="monster in bestiary.filteredMonsters"
        :key="monster.slug"
        :monster="monster"
        @open-modal="openModal"
      />
    </div>

    <!-- empty -->
    <p
      v-else
      class="text-amber-400 text-center mt-10"
    >
      El conjuro de búsqueda falló: No hay monstruos que coincidan
    </p>

    <!-- PAGINACIÓN -->
    <div class="flex justify-center items-center gap-6 mt-8">

      <button
        @click="bestiary.prevPage"
        :disabled="!bestiary.previous"
        class="px-3 py-2 border border-amber-700 text-amber-300
               hover:bg-amber-700 hover:text-white
               disabled:opacity-30 disabled:hover:bg-transparent
               rounded transition"
      >
        ←
      </button>

      <span class="text-amber-300 font-semibold">
        Página {{ bestiary.page }}
      </span>

      <button
        @click="bestiary.nextPage"
        :disabled="!bestiary.next"
        class="px-3 py-2 border border-amber-700 text-amber-300
               hover:bg-amber-700 hover:text-white
               disabled:opacity-30 disabled:hover:bg-transparent
               rounded transition"
      >
        →
      </button>

    </div>

    <!-- modal -->
    <MonsterModal
      v-if="selectedMonster"
      :monster="selectedMonster"
      @close="selectedMonster = null"
    />

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue"
import { useBestiaryStore } from "../stores/bestiaryStore"

import MonsterCard from "../components/MonsterCard.vue"
import MonsterModal from "../components/MonsterModal.vue"
import MonsterSearch from "../components/MonsterSearch.vue"
import MonsterFilter from "../components/MonsterFilter.vue"
import MonsterSkeleton from "../components/MonsterSkeleton.vue"

const bestiary = useBestiaryStore()

const selectedMonster = ref(null)

function openModal(monster) {
  selectedMonster.value = monster
}

onMounted(() => {
  bestiary.reset()
})

/* 🔥 FIX BUSCADOR */
watch(
  () => bestiary.searchQuery,
  () => {
    bestiary.page = 1
    bestiary.fetchMonsters()
  }
)

/* tipos dinámicos + dragon */
const types = computed(() => {
  const apiTypes = bestiary.monsters
    .map(m => m.type)
    .filter(Boolean)

  const unique = [...new Set(apiTypes)]

  if (!unique.includes("Dragon")) {
    unique.push("Dragon")
  }

  return unique
})
</script>