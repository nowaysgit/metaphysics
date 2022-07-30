export const API_URL = 'http://localhost:8080/api'

export default function ({ $axios, $cookies }, inject) {
  const $api = $axios.create({
    withCredentials: true,
    baseURL: API_URL
  })

  $api.interceptors.response.use((config) => {
    return config
  }, async (error) => {
    if (process.client) {
      const originalRequest = error.config
      if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
          await $axios.get(`${API_URL}/user/refresh`, { withCredentials: true })
          return $api.request(originalRequest)
        } catch (e) {
          // console.log(e)
        }
      }
      throw error
    }
  })
  inject('axios', $api)
}
