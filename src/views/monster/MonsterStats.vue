<template>
  <div v-if="monster">

    <div class="grid grid-cols-2 gap-6 mb-8 text-amber-200">

      <div>Fuerza: {{ monster.strength }}</div>
      <div>Destreza: {{ monster.dexterity }}</div>

      <div>Constitución: {{ monster.constitution }}</div>
      <div>Inteligencia: {{ monster.intelligence }}</div>

      <div>Sabiduría: {{ monster.wisdom }}</div>
      <div>Carisma: {{ monster.charisma }}</div>

    </div>

    <MonsterStatsChart :monster="monster" />

  </div>

  <div v-else>
    Cargando atributos...
  </div>
</template>

<script setup>
import MonsterStatsChart from "../../components/MonsterStatsChart.vue"

defineProps({
  monster: Object
})
</script>