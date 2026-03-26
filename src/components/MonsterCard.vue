<template>
  <div class="bg-[#1a120d] border border-amber-700 p-4 rounded-xl">

    <h3 class="text-amber-400 font-bold mb-2">
      {{ monster.name }}
    </h3>

    <p class="text-sm text-amber-300">
      Tipo: {{ monster.type }}
    </p>

    <p class="text-sm text-amber-300 mb-4">
      HP: {{ monster.hp || '-' }} | AC: {{ monster.ac || '-' }}
    </p>

    <div class="flex gap-3">

      <RouterLink
        :to="`/monster/${monster.slug}`"
        class="px-3 py-1 bg-amber-500 text-black rounded"
      >
        Detalle
      </RouterLink>

      <button
        @click="$emit('open-modal', monster)"
        class="px-3 py-1 border border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-black transition"
      >
        Grimorio
      </button>

    </div>

  </div>
</template>

<script setup>
defineProps({
  monster: Object
})
</script>