<template>
  <div class="border border-amber-800 p-6 rounded-xl">

    <p class="text-amber-300 mb-3">Registro de Combate</p>

    <button
      @click="rollDice"
      class="px-4 py-2 bg-amber-600 rounded mb-4"
    >
      Tirar d20
    </button>

    <div
      ref="logContainer"
      class="text-amber-200 space-y-1 max-h-32 overflow-y-auto"
    >
      <p v-for="(roll, index) in rolls" :key="index">
        {{ roll }}
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue"

const rolls = ref([])
const logContainer = ref(null)

function rollDice() {
  const result = Math.floor(Math.random() * 20) + 1
  rolls.value.push(`Tirada de ataque: ${result}`)
}

watch(rolls, async () => {
  await nextTick()

  if (logContainer.value) {
    logContainer.value.scrollTop = logContainer.value.scrollHeight
  }
})
</script>