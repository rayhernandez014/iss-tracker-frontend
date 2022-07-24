import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useState } from 'react'
import TabPanel from './TabPanel'
import Fab from '@mui/material/Fab'
import InfoIcon from '@mui/icons-material/Info'
import CodeIcon from '@mui/icons-material/Code'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Drawer = ({ coordinates, speed, height }) => {

  const [state, setState] = useState(false)
  const [value, setValue] = useState(0)

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    if (open) {
      setValue(0)
    }

    setState(open)
  }

  const fabStyleData = {
    color: 'primary',
    sx: {
      position: 'absolute',
      top: 80,
      right: 16,
      zIndex: 1201
    },
    icon: <InfoIcon />,
    label: 'Add',
  }

  return (
    <>
      <Fab sx={fabStyleData.sx} aria-label={fabStyleData.label} color={fabStyleData.color} onClick={toggleDrawer(!state)}>
        {fabStyleData.icon}
      </Fab>
      <SwipeableDrawer
        anchor={'bottom'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        variant="persistent"
        PaperProps={{
          elevation: 24,
          sx: {
            margin: 3,
            borderRadius: '16px'
          }
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab icon={<SatelliteAltIcon />} label="ISS Details" {...a11yProps(0)} />
            <Tab icon={<CodeIcon />} label="About" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={6}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body2" color="text.secondary" > Unit </Typography>
                  <Typography variant="body1" > Metric </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3} xs={6}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body2" color="text.secondary" > Coordinates </Typography>
                  <Typography variant="body1" > {`Long.: ${coordinates[1].toFixed(2)}°, Lat.: ${coordinates[0].toFixed(2)}°`} </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3} xs={6}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body2" color="text.secondary" > Speed </Typography>
                  <Typography variant="body1" > {speed.toFixed(2)} km/h </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3} xs={6}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body2" color="text.secondary" > Altitude </Typography>
                  <Typography variant="body1" > {height.toFixed(2)} km </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body1" > Map provided by
                    <Link href="https://react-leaflet.js.org/" underline="none"> React Leaflet </Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body1" > ISS data provided by
                    <Link href="https://uphere.space/" underline="none"> UPHERE.SPACE </Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper elevation={0} >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}>
                  <Typography variant="body1" > App developed by
                    <Link href="https://www.linkedin.com/in/ray-hernandez0/?locale=en_US" underline="none"> Ray Hernandez </Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableDrawer>
    </>
  )
}

export default Drawer