import { defineStore } from "pinia"
import { getSpells } from "../services/monsterService"

export const useSpellStore = defineStore("spell", {

  state: () => ({
    spells: [],
    isLoading: false
  }),

  actions: {
    async fetchSpells() {
      try {
        this.isLoading = true

        const data = await getSpells()

        this.spells = data.results || []

      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  },

  getters: {
    highLevelSpellsCount: (state) =>
      state.spells.filter(s => s.level >= 5).length
  }

})