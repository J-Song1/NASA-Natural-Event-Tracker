import { Icon } from '@iconify/react'
import wildFireIcon from '@iconify/icons-mdi/pine-tree-fire'
import hurricaneIcon from '@iconify/icons-mdi/weather-hurricane'
import iceIcon from '@iconify/icons-mdi/snowflake'
import volcanoIcon from '@iconify/icons-mdi/fire'
import './LocationMarker.css'

const LocationMarker = ({ lat, lng, onClick, type }) => {
  const icons = {
    8: wildFireIcon,
    10: hurricaneIcon,
    12: volcanoIcon,
    15: iceIcon
  }

  return (
    <div className="location-marker" type={type} onClick={onClick}>
      <Icon icon={icons[type]} className="location-icon" />
    </div>
  )
}

export default LocationMarker
