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

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }

  if (location) {
    let mapHeight = '85vh'
    let paperHeight = '15vh'
    const dimensions = getWindowDimensions()
    if (dimensions.width < 800){
      mapHeight = '65vh'
      paperHeight = '35vh'
    }
    return (
      <Container maxWidth={false} disableGutters={true}>
        <Box
          sx={{
            height: mapHeight
          }}>
          <Map coordinates={location.coordinates.reverse()} getInfo={getInfo}/>
        </Box>
        <Box>
          <Footer coordinates={location.coordinates} speed={location.speed} height={location.height} paperHeight={paperHeight}/>
        </Box>
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
