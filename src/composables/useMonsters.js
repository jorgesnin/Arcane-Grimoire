import { ref, watch, computed } from "vue"
import { getMonsters } from "../services/monsterService"

export default function useMonsters() {

  const monsters = ref([])
  const isLoading = ref(false)
  const isError = ref(false)

  const searchQuery = ref("")
  const selectedType = ref("")
  const page = ref(1)

  const next = ref(null)
  const previous = ref(null)

  let timeout = null

  async function fetchMonsters() {
    try {
      isLoading.value = true

      const data = await getMonsters({
        search: searchQuery.value,
        page: page.value
      })

      monsters.value = data.results
      next.value = data.next
      previous.value = data.previous

    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  function nextPage() {
    if (next.value) {
      page.value++
      fetchMonsters()
    }
  }

  function prevPage() {
    if (previous.value && page.value > 1) {
      page.value--
      fetchMonsters()
    }
  }

  watch(searchQuery, () => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      page.value = 1
      fetchMonsters()
    }, 400)
  })

  watch(selectedType, () => {
    page.value = 1
  })

  const filteredMonsters = computed(() => {
    if (!selectedType.value) return monsters.value

    return monsters.value.filter(m =>
      m.type?.toLowerCase().includes(selectedType.value.toLowerCase())
    )
  })

  return {
    monsters,
    filteredMonsters,
    isLoading,
    isError,
    searchQuery,
    selectedType,
    fetchMonsters,
    nextPage,
    prevPage,
    next,
    previous,
    page
  }
}