import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:7001',
  timeout: 6000,
})

// 拦截器
instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})
instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

export default instance