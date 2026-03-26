import api from "./api"

export async function getMonsters({ search = "", page = 1 } = {}) {
  const response = await api.get("/monsters", {
    params: {
      search,
      page,
      limit: 9
    }
  })

  return response.data
}

export async function getMonsterBySlug(slug) {
  const response = await api.get(`/monsters/${slug}`)
  return response.data
}

export async function getSpells() {
  const response = await api.get("/spells")
  return response.data
}