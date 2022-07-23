import { useState, useEffect } from 'react'
import locationService from './services/location'
import Map from './components/Map'
import Bar from './components/Bar'
import Drawer from './components/Drawer'
import authService from './services/auth'
import Container from '@mui/material/Container'
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#009688'
      }
    }
  })

  if (location) {
    return (
      <Container maxWidth={false} disableGutters={true}>
        <ThemeProvider theme={theme}>
          <Bar />
          <Map coordinates={location.coordinates.reverse()} getInfo={getInfo}/>
          <Drawer coordinates={location.coordinates} speed={location.speed} height={location.height}/>
        </ThemeProvider>
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
