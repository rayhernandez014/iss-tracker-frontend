import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const Footer = ({ coordinates, speed, height }) => {

  return (
    <Paper >
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Box
              sx={{
                padding: 1,
                textAlign: 'center',
              }}>
              <Typography variant="h6" gutterBottom> Unit </Typography>
              <Typography variant="body1" gutterBottom> Metric </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Box
              sx={{
                padding: 1,
                textAlign: 'center',
              }}>
              <Typography variant="h6" gutterBottom> Coordinates </Typography>
              <Typography variant="body1" gutterBottom> {`Long.: ${coordinates[1].toFixed(2)}°, Lat.: ${coordinates[0].toFixed(2)}°`} </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Box
              sx={{
                padding: 1,
                textAlign: 'center',
              }}>
              <Typography variant="h6" gutterBottom> Speed </Typography>
              <Typography variant="body1" gutterBottom> {speed.toFixed(2)} km/h </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Box
              sx={{
                padding: 1,
                textAlign: 'center',
              }}>
              <Typography variant="h6" gutterBottom> Altitude </Typography>
              <Typography variant="body1" gutterBottom> {height.toFixed(2)} km </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#eeeeee'
            }}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Paper elevation={0}>
                  <Box
                    sx={{
                      padding: 1,
                      textAlign: 'center',
                      backgroundColor: '#eeeeee'
                    }}>
                    <Typography variant="caption" gutterBottom>
                Map provided by
                      <Link href="https://www.openstreetmap.org/about" underline="none"> Open Street Map </Link> </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0}>
                  <Box
                    sx={{
                      padding: 1,
                      textAlign: 'center',
                      backgroundColor: '#eeeeee'
                    }}>
                    <Typography variant="caption" gutterBottom>
                ISS data provided by
                      <Link href="https://uphere.space/" underline="none"> UPHERE.SPACE </Link> </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0}>
                  <Box
                    sx={{
                      padding: 1,
                      textAlign: 'right',
                      backgroundColor: '#eeeeee'
                    }}>
                    <Typography variant="caption" gutterBottom>
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
  )
}

export default Footer