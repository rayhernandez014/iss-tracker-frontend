import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet'
import ChangeView from './ChangeView'

const issIcon = new Icon({
  iconUrl: '/issicon.png',
  iconSize: [64, 64],
  iconAnchor: [32, 32]
})

const Map = ({ coordinates, getInfo }) => {

  setTimeout(() => getInfo(), 5000)

  return (
    <MapContainer center={coordinates} zoom={5} scrollWheelZoom={false} style={{ width:'100%', height:'100vh' }} zoomControl={false} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates} icon={issIcon}>
      </Marker>
      <ZoomControl position='bottomleft'/>
      <ChangeView coordinates={coordinates}/>
    </MapContainer>
  )
}

export default Map