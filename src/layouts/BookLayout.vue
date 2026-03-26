<template>
  <div
    class="flex min-h-screen text-[#eadcc6] bg-linear-to-br from-[#140f0c] via-[#1c1410] to-[#120c09]"
  >

    <!-- aside libro -->
    <aside
      class="w-28 bg-linear-to-b from-[#2b1d14] via-[#1a120d] to-[#120c09]
             border-r-4 border-amber-900
             shadow-inner shadow-black/60
             flex flex-col items-center py-6 gap-8 relative"
    >

      <!-- linea -->
      <div class="absolute left-0 top-0 h-full w-1 bg-amber-800/40"></div>

      <!-- titulo -->
      <div class="text-2xl font-bold text-amber-500 tracking-widest">
        AG
      </div>

      <!-- links -->
      <router-link
        to="/welcome"
        class="hover:text-amber-400 hover:scale-105 transition-all duration-200"
      >
        Inicio
      </router-link>

      <router-link
        to="/dashboard"
        class="hover:text-amber-400 hover:scale-105 transition-all duration-200"
      >
        Dashboard
      </router-link>

      <router-link
        to="/bestiary"
        class="hover:text-amber-400 hover:scale-105 transition-all duration-200"
      >
        Bestiario
      </router-link>

    </aside>

    <!-- contenido -->
    <main class="flex-1 p-8">
      <router-view />
    </main>

  </div>
</template>

<script setup>
</script>