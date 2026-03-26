<template>
  <div class="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

    <!-- imagen de fondo -->
    <img
      :src="bg"
      class="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    <!-- overlay oscuro -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- contenido -->
    <div class="relative z-10 max-w-2xl px-6">

      <h1 class="text-4xl md:text-5xl text-amber-400 font-bold mb-6">
        Arcane Grimoire - 2026
      </h1>

      <p class="text-lg text-amber-200 mb-4">
        Bienvenido al Archivo de Monstruos y Criaturas.
      </p>

      <p class="text-amber-300">
        Explora el bestiario para descubrir entidades oscuras,
        sus habilidades y su historia. Elige al mejor.
      </p>

    </div>

  </div>
</template>

<script setup>
import bg from "../../assets/welcome-bg.jpg"
</script>