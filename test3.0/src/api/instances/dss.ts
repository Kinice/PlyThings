import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

function setInterceptors(instance: AxiosInstance) {
  // request interceptor
  instance.interceptors.request.use((req: AxiosRequestConfig) => {
    return req
  }, (error: AxiosError) => {
    console.error(error)
    return Promise.reject(error)
  })

  // response interceptor
  instance.interceptors.response.use((res: AxiosResponse) => {
    if (res.data.code !== 0) {
      return Promise.reject(res.data.errors[0])
    }
    return res
  }, (error: AxiosError) => {
    console.dir(error)
    if (error.code === 'ECONNABORTED') {
      console.error('网络错误，请检查网络连接刷新后重试')
    } else {
      console.error('发生了奇怪的错误')
    }
    return Promise.reject(error)
  })
}

export default (settings: object): AxiosInstance => {
  const instance: AxiosInstance = axios.create(settings)
  setInterceptors(instance)
  return instance
}
