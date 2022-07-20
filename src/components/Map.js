import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import ChangeView from './ChangeView'

const mapStyle = {
  width: '99vw',
  height: '85vh'
}

const issIcon = new Icon({
  iconUrl: '/issicon.png',
  iconSize: [64, 64],
  iconAnchor: [32, 32]
})

const Map = ({ location, getInfo }) => {

  setTimeout(() => getInfo(), 10000)

  return (
    <MapContainer center={location} zoom={5} scrollWheelZoom={false} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={issIcon}>
      </Marker>
      <ChangeView location={location}/>
    </MapContainer>
  )
}

export default Map