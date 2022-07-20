import axios from 'axios'
const baseUrl = '/api/auth'

const getKey = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const authService = { getKey }

export default authService