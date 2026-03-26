<template>
  <BaseModal @close="$emit('close')">
    <template #header>
      <h2 class="text-2xl font-bold text-amber-400">
        {{ monster.name }}
      </h2>
    </template>

    <template #body>
      <img
        v-if="monster.img_main"
        :src="monster.img_main"
        class="w-full h-56 object-cover rounded-lg mb-4"
      />

      <p class="text-amber-200 mb-2">
        Tipo: {{ monster.type }}
      </p>

      <p class="text-amber-300 mb-6">
        {{ monster.desc || "No hay descripción disponible." }}
      </p>

      <button
        @click="addToEncounter"
        class="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold py-2 rounded-lg transition"
      >
        Añadir a encuentros
      </button>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from "./BaseModal.vue"
import { useToast } from "../composables/useToast"

const props = defineProps({
  monster: Object
})

defineEmits(["close"])

const { show } = useToast()

function addToEncounter() {
  show(`¡${props.monster.name} añadido al rastreador de combate!`)
}
</script>