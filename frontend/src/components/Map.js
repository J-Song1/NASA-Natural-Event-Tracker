import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import './Map.css'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(event => {
    if (event.geometries[0].type === "Polygon") return null;

    return event.geometries.map(geometry => {
      return <LocationMarker
        lat={geometry.coordinates[1]}
        lng={geometry.coordinates[0]}
        type={event.categories[0].id}
        onClick={() => setLocationInfo({
          id: event.id,
          category: event.categories[0].title,
          title: event.title,
          coordinates: geometry.coordinates,
          date: geometry.date.substr(0, 10)
        })}
      />
    });
  }).flat();

  console.log(markers)

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>

      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 44.6713700,
    lng: -103.8521500
  },
  zoom: 4
}

export default Map