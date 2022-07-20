import { useMap } from 'react-leaflet'

const ChangeView = ({ location }) => {
  const map = useMap()
  const currentZoom = map.getZoom()
  map.setView(location, currentZoom)
  return null
}

export default ChangeView