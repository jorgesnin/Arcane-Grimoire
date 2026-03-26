<template>
  <div>

    <h1 class="text-3xl text-amber-400 font-bold mb-6">
      Bestiario
    </h1>

    <!-- buscador -->
    <input
      v-model="bestiary.searchQuery"
      @input="handleSearch"
      type="text"
      placeholder="Buscar monstruo..."
      class="w-full mb-4 p-2 bg-[#1a120d] border border-amber-700 text-amber-200"
    />

    <!-- filtro -->
    <select
      v-model="bestiary.selectedType"
      @change="handleSearch"
      class="mb-6 p-2 bg-[#1a120d] border border-amber-700 text-amber-200"
    >
      <option value="">Todos</option>
      <option v-for="type in types" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <!-- lista -->
    <div class="grid grid-cols-3 gap-6">

      <MonsterCard
        v-for="monster in bestiary.filteredMonsters"
        :key="monster.slug"
        :monster="monster"
        @open-modal="openModal"
      />

    </div>

    <!-- paginacion-->
    <div class="flex justify-center gap-4 mt-8">

      <button
        @click="bestiary.prevPage"
        class="px-4 py-2 border border-amber-700 text-amber-300"
      >
        Anterior
      </button>

      <span class="text-amber-300">
        Página {{ bestiary.page }}
      </span>

      <button
        @click="bestiary.nextPage"
        class="px-4 py-2 border border-amber-700 text-amber-300"
      >
        Siguiente
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
import { ref, onMounted, computed } from "vue"
import { useBestiaryStore } from "../stores/bestiaryStore"

import MonsterCard from "../components/MonsterCard.vue"
import MonsterModal from "../components/MonsterModal.vue"

const bestiary = useBestiaryStore()

const selectedMonster = ref(null)

function openModal(monster) {
  selectedMonster.value = monster
}

function handleSearch() {
  bestiary.page = 1
  bestiary.fetchMonsters()
}

onMounted(() => {

  bestiary.reset()
})

const types = computed(() => {
  const all = bestiary.monsters.map(m => m.type).filter(Boolean)
  return [...new Set(all)]
})
</script>