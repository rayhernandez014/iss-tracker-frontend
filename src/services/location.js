import axios from 'axios'

const baseUrl = '/api/location'

const getLocation = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const locationService = { getLocation }

export default locationService