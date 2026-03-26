<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
        @click.self="$emit('close')"
      >
        <transition name="scale">
          <div
            class="bg-[#2a1e18] border border-amber-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-8"
          >

            <button
              class="absolute top-3 right-3 text-amber-400 hover:text-red-400 text-xl"
              @click="$emit('close')"
            >
              ✕
            </button>

            <div class="mb-4">
              <slot name="header" />
            </div>

            <div>
              <slot name="body" />
            </div>

          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
defineEmits(["close"])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active {
  transition: all 0.2s ease;
}
.scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
</style>