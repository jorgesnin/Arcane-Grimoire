<template>
  <div v-if="isLoading" class="text-amber-400">
    Cargando grimorio...
  </div>

  <div v-else-if="monster" class="text-amber-200">

    <h1 class="text-4xl text-amber-400 font-bold mb-6">
      {{ monster.name }}
    </h1>

    <RouterLink
      to="/bestiary"
      class="inline-block mb-4 text-amber-400 hover:text-amber-500 transition"
    >
      ← Volver al bestiario
    </RouterLink>

    <div class="flex gap-6 mb-6 border-b border-amber-700 pb-2">
      <RouterLink
        :to="{ name: 'monster-stats', params: { slug: monster.slug } }"
        class="px-3 py-1 rounded border border-amber-700 text-amber-300"
      >
        Stats
      </RouterLink>

      <RouterLink
        :to="{ name: 'monster-lore', params: { slug: monster.slug } }"
        class="px-3 py-1 rounded border border-amber-700 text-amber-300"
      >
        Lore
      </RouterLink>
    </div>

    <RouterView :monster="monster" />

  </div>

  <div v-else class="text-red-500">
    Monstruo no encontrado
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { watch, ref } from "vue"
import { getMonsterBySlug } from "../services/monsterService"

const route = useRoute()

const monster = ref(null)
const isLoading = ref(true)

async function loadMonster(slug) {
  isLoading.value = true
  monster.value = await getMonsterBySlug(slug)
  isLoading.value = false
}

watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      loadMonster(newSlug)
    }
  },
  { immediate: true }
)
</script>