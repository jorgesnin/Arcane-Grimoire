import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_DND_API_URL
  
})

// interceptor pide
api.interceptors.request.use(config => {
  console.log("Request:", config.url)
  return config
})

// interceptor responde
api.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.message)
    return Promise.reject(error)
  }
)

export default api