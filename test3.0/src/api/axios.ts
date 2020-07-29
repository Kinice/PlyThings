import dssApiCreator from './instances/dss'

export const dpi = dssApiCreator({
  baseURL: process.env.NODE_ENV === 'development' ? '/dpi' : '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
