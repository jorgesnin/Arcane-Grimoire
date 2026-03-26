<template>
  <div v-if="monster" class="text-amber-200 leading-relaxed">

    <p class="italic text-amber-300">
      {{ monster.desc || "Este ser habita en los rincones olvidados del mundo..." }}
    </p>

  </div>

  <div v-else>
    Cargando historia...
  </div>
</template>

<script setup>
defineProps({
  monster: Object
})
</script>