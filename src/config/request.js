import axios from 'axios'

const request = axios.create()

request.interceptors.response.use(
  (response) => {
    return { ...response, success: true }
  },
  () => {
    return { success: false }
  }
)

export default request
