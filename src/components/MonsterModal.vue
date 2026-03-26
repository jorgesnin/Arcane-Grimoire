<template>
  <!-- fondo -->
  <div
    class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    @click="$emit('close')"
  >

    <!-- contenido -->
    <div
      class="bg-[#1a120d] border border-amber-700 p-6 rounded-xl 
             w-full max-w-2xl mx-4 relative max-h-[90vh] overflow-y-auto"
      @click.stop
    >

      <!-- cerrar -->
      <button
        @click="$emit('close')"
        class="absolute top-3 right-4 text-amber-400 hover:text-red-400"
      >
        X
      </button>

      <!-- nombre -->
      <h2 class="text-2xl text-amber-400 mb-4">
        {{ monster.name }}
      </h2>

      <!-- tipo -->
      <p class="text-amber-300 mb-2">
        Tipo: {{ monster.type || "Desconocido" }}
      </p>

      <!-- lore -->
      <p class="text-amber-200 mt-4 leading-relaxed whitespace-pre-line">
        {{ description }}
      </p>

      <!-- botón -->
      <button
        @click="addToEncounter"
        class="mt-6 px-6 py-2 bg-amber-500 text-black rounded hover:bg-amber-400 transition block mx-auto"
      >
        Añadir a encuentros
      </button>

    </div>

  </div>
</template>

<script setup>
import { computed } from "vue"
import { useToast } from "../composables/useToast"

const props = defineProps({
  monster: Object
})

const { show } = useToast()

const description = computed(() => {
  return (
    props.monster?.desc ||
    props.monster?.document__desc ||
    "No hay descripción disponible"
  )
})

function addToEncounter() {
  show(`${props.monster.name} añadido`)
}
</script>