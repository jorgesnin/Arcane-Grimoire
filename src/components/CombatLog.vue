<template>
  <div class="bg-[#1a120d] border border-amber-700 rounded-xl p-6">

    <h2 class="text-amber-400 mb-4">
      Registro de Combate
    </h2>

    <button
      @click="rollDice"
      class="mb-4 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded"
    >
      Tirar d20
    </button>

    <div
      ref="logContainer"
      class="h-40 overflow-y-auto border border-amber-700 p-3 text-sm"
    >
      <p v-for="(log, index) in logs" :key="index">
        {{ log }}
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue"

const logs = ref([])
const logContainer = ref(null)

function rollDice() {
  const roll = Math.floor(Math.random() * 20) + 1
  logs.value.push(`Tirada de ataque: ${roll}`)
}

watch(logs, async () => {
  await nextTick()
  logContainer.value.scrollTop = logContainer.value.scrollHeight
})
</script>