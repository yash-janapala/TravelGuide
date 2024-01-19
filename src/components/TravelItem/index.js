import './index.css'

const TravelItem = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <li className="travel-location-item">
      <img className="location-image" src={imageUrl} alt={name} />
      <div className="details-container">
        <h1 className="travel-location-heading">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelItem
