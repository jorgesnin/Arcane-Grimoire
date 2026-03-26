import { defineStore } from "pinia"
import { getMonsters } from "../services/monsterService"

export const useBestiaryStore = defineStore("bestiary", {

  state: () => ({
    monsters: [],
    isLoading: false,
    isError: false,

    searchQuery: "",
    selectedType: "",
    page: 1,

    next: null,
    previous: null,

    preparedMonsters: []
  }),

  // Persistimos solo lo necesario
  persist: {
    paths: ["preparedMonsters"]
  },

  actions: {
    async fetchMonsters() {
      try {
        this.isLoading = true
        this.isError = false

        const data = await getMonsters({
          search: this.searchQuery,
          page: this.page
        })

        this.monsters = data.results
        this.next = data.next
        this.previous = data.previous

      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },

    nextPage() {
      if (this.next) {
        this.page++
        this.fetchMonsters()
      }
    },

    prevPage() {
      if (this.previous && this.page > 1) {
        this.page--
        this.fetchMonsters()
      }
    },

    reset() {
      this.searchQuery = ""
      this.selectedType = ""
      this.page = 1
      this.fetchMonsters()
    },

    togglePrepared(monsterId) {
      const index = this.preparedMonsters.indexOf(monsterId)

      if (index === -1) {
        this.preparedMonsters.push(monsterId)
      } else {
        this.preparedMonsters.splice(index, 1)
      }
    }
  },

  getters: {
    filteredMonsters: (state) => {
      if (!state.selectedType) return state.monsters

      return state.monsters.filter(m =>
        m.type?.toLowerCase().includes(state.selectedType.toLowerCase())
      )
    }
  }
})