import { useState, useEffect } from 'react'
import locationService from './services/location'
import Map from './components/Map'
import authService from './services/auth'
//import { Container } from '@mui/material'

function App() {

  const [location, setLocation] = useState(null)

  useEffect( () => {
    initialize()
  }, [])

  const initialize = async () => {
    await getKey()
    getInfo()
  }

  const getInfo = async () => {
    const result = await locationService.getLocation()
    setLocation(result)
  }

  const getKey = async () => {
    const result = await authService.getKey()
    locationService.confKey(result.key)
  }

  if (location) {
    return (
      <>
        <Map location={location.coordinates.reverse()} getInfo={getInfo}/>
        <footer>
          <p> Unit: metric | Coordinates: {`${location.coordinates[1]} , ${location.coordinates[0]}`} | Speed: {location.speed} km/h | Height: {location.height}</p>
        </footer>
      </>
    )
  }
  else {
    return (
      <div>
        loading icon
      </div>
    )
  }
}

export default App
