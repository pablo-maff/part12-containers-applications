import axios from 'axios'

const apiClient = axios.create({
  baseURL: "http://host.docker.internal:3001/"//import.meta.env.VITE_BACKEND_URL,
})

export default apiClient