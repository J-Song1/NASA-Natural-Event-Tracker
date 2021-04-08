import './LocationInfoBox.css'

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>{info.title}</h2>
      <ul>
        <li>Date: <strong>{info.date}</strong></li>
        <li>Event Type: <strong>{info.category}</strong></li>
        <li>Coordinates: <strong>{info.coordinates[0]}, {info.coordinates[1]}</strong></li>
        <li>ID: <strong>{info.id}</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
