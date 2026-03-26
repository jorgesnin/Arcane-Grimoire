<template>
  <div>

    <h1 class="text-3xl text-amber-400 font-bold mb-2">
      Panel de Campaña
    </h1>

    <p class="text-amber-300 mb-6">
      Campaña: {{ campaign.name }} | Nivel del grupo: {{ campaign.partyLevel }}
    </p>

    <div class="grid grid-cols-2 gap-6">

      <!-- MONSTRUOS -->
      <div class="border border-amber-800 p-6 rounded-xl">
        <p class="text-amber-300">Monstruos Totales</p>

        <p v-if="isLoading" class="text-2xl mt-2">...</p>

        <p v-else class="text-4xl text-amber-400 mt-2">
          {{ monstersCount }}
        </p>
      </div>

      <!-- HECHIZOS -->
      <div class="border border-amber-800 p-6 rounded-xl">
        <p class="text-amber-300">Hechizos Totales</p>

        <p v-if="isLoading" class="text-2xl mt-2">...</p>

        <p v-else class="text-4xl text-amber-400 mt-2">
          {{ spellsCount }}
        </p>
      </div>

      <!-- CLOCK -->
      <CampaignClock />

      <!-- LOG -->
      <CombatLog />

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue"
import { getMonsters, getSpells } from "../services/monsterService"

import CampaignClock from "../components/CampaignClock.vue"
import CombatLog from "../components/CombatLog.vue"

// inject
const campaign = inject("campaignContext")

const monstersCount = ref(0)
const spellsCount = ref(0)

const isLoading = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true

    const [monsters, spells] = await Promise.all([
      getMonsters(),
      getSpells()
    ])

    monstersCount.value = monsters.count
    spellsCount.value = spells.count

  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
})
</script>