<template>
  <div>

    <h1 class="text-3xl text-amber-400 font-bold mb-6">
      Panel de Campaña
    </h1>

    <div v-if="isLoading" class="text-amber-400">
      Cargando datos...
    </div>

    <div v-else class="grid grid-cols-2 gap-6">

      <!-- monstruos -->
      <div class="bg-[#1a120d] border border-amber-700 p-6 rounded-xl">
        <p class="text-amber-300">Monstruos Totales</p>
        <h2 class="text-3xl text-amber-400">
          {{ bestiary.monsters.length }}
        </h2>
      </div>

      <!-- hechizos -->
      <div class="bg-[#1a120d] border border-amber-700 p-6 rounded-xl">
        <p class="text-amber-300">Hechizos Nivel Alto</p>
        <h2 class="text-3xl text-amber-400">
          {{ spell.highLevelSpellsCount }}
        </h2>
      </div>

      <!-- dia -->
      <div class="bg-[#1a120d] border border-amber-700 p-6 rounded-xl">
        <p class="text-amber-300 mb-2">Día de Campaña</p>
        <h2 class="text-3xl text-amber-400">
          {{ day }}
        </h2>
      </div>

      <!-- combate-->
      <div class="bg-[#1a120d] border border-amber-700 p-6 rounded-xl">
        <p class="text-amber-300 mb-2">Registro de Combate</p>

        <button
          @click="rollDice"
          class="bg-amber-500 text-black px-4 py-2 rounded"
        >
          Tirar d20
        </button>

        <p class="mt-4 text-amber-200">
          Resultado: {{ result }}
        </p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useBestiaryStore } from "../stores/bestiaryStore"
import { useSpellStore } from "../stores/spellStore"

const bestiary = useBestiaryStore()
const spell = useSpellStore()

const isLoading = ref(true)
const day = ref(1)
const result = ref(null)

function rollDice() {
  result.value = Math.floor(Math.random() * 20) + 1
}

onMounted(async () => {
  try {
    await Promise.all([
      bestiary.fetchMonsters(),
      spell.fetchSpells()
    ])
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
})
</script>