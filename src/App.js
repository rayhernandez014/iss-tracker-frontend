import { useState, useEffect } from 'react'
import locationService from './services/location'
import Map from './components/Map'
import authService from './services/auth'
import Container from '@mui/material/Container'
import Footer from './components/Footer'
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone'
import Box from '@mui/material/Box'


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
      <Container maxWidth={false} disableGutters={true}>
        <Map coordinates={location.coordinates.reverse()} getInfo={getInfo}/>
        <Footer coordinates={location.coordinates} speed={location.speed} height={location.height}/>
      </Container>
    )
  }
  else {
    return (
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%'
          }}>
          <HourglassTopTwoToneIcon sx={{ fontSize: 200 }}/>
        </Box>
      </Container>
    )
  }
}

export default App
