import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { createTheme, responsiveFontSizes, ThemeProvider, } from '@mui/material/styles'

const Footer = ({ coordinates, speed, height, paperHeight }) => {

  let theme = createTheme()
  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: paperHeight, maxHeight: paperHeight, overflow: 'auto', backgroundColor: '#eeeeee' }}>
        <Grid container style={{ backgroundColor:'#fafafa' }}>
          <Grid item md={3} xs={6}>
            <Paper elevation={0}>
              <Box
                sx={{
                  padding: 1,
                  textAlign: 'center',
                }}>
                <Typography variant="h6" > Unit </Typography>
                <Typography variant="body1" > Metric </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} xs={6}>
            <Paper elevation={0}>
              <Box
                sx={{
                  padding: 1,
                  textAlign: 'center',
                }}>
                <Typography variant="h6" > Coordinates </Typography>
                <Typography variant="body1" > {`Long.: ${coordinates[1].toFixed(2)}°, Lat.: ${coordinates[0].toFixed(2)}°`} </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} xs={6}>
            <Paper elevation={0}>
              <Box
                sx={{
                  padding: 1,
                  textAlign: 'center',
                }}>
                <Typography variant="h6" > Speed </Typography>
                <Typography variant="body1" > {speed.toFixed(2)} km/h </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} xs={6}>
            <Paper elevation={0}>
              <Box
                sx={{
                  padding: 1,
                  textAlign: 'center',
                }}>
                <Typography variant="h6" > Altitude </Typography>
                <Typography variant="body1" > {height.toFixed(2)} km </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: '#eeeeee'
              }}>
              <Grid container>
                <Grid item md={3} xs={4}>
                  <Paper elevation={0}>
                    <Box
                      sx={{
                        padding: 1,
                        textAlign: 'center',
                        backgroundColor: '#eeeeee'
                      }}>
                      <Typography variant="caption" >
                Map provided by
                        <Link href="https://www.openstreetmap.org/about" underline="none"> Open Street Map </Link> </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item md={3} xs={4}>
                  <Paper elevation={0}>
                    <Box
                      sx={{
                        padding: 1,
                        textAlign: 'center',
                        backgroundColor: '#eeeeee'
                      }}>
                      <Typography variant="caption" >
                ISS data provided by
                        <Link href="https://uphere.space/" underline="none"> UPHERE.SPACE </Link> </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item md={6} xs={4}>
                  <Paper elevation={0}>
                    <Box
                      sx={{
                        padding: 1,
                        textAlign: 'right',
                        backgroundColor: '#eeeeee'
                      }}>
                      <Typography variant="caption" >
                App developed by
                        <Link href="https://www.linkedin.com/in/ray-hernandez0/?locale=en_US" underline="none"> Ray Hernandez </Link> </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default Footer