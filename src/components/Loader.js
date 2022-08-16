import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const Loader = ({ getInfo, attempts }) => {
  if (attempts !== 'error') {
    setTimeout(() => getInfo(), 5000)
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%'
        }}>
        <CircularProgress />
      </Box>
    )
  }
  else{
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%'
        }}>
        <Alert severity="error">
          <AlertTitle>Yikes!</AlertTitle>
            We are having difficulties connecting to the server — <strong>please, try again later</strong>
        </Alert>
      </Box>
    )
  }


}

export default Loader