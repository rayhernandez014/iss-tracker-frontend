import { useState, useEffect } from 'react'
import locationService from './services/location'
import Map from './components/Map'
import Bar from './components/Bar'
import Loader from './components/Loader'
import Drawer from './components/Drawer'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {

  const [location, setLocation] = useState(null)
  const [attempts, setAttempts] = useState(0)

  useEffect( () => {
    getInfo()
  }, [])

  const getInfo = async () => {

    try{
      const result = await locationService.getLocation()
      if (result.location) {
        setLocation(result.location)
        setAttempts(0)
      }
      else{
        handleError()
      }
    }
    catch (exception) {
      handleError()
    }
  }

  const handleError = () => {
    if (attempts < 12) {
      setAttempts(attempts+1)
      setLocation(null)
    }
    else{
      setAttempts('error')
      setLocation(null)
    }
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
        <Loader attempts={attempts} getInfo={getInfo}/>
      </Container>
    )
  }
}

export default App
