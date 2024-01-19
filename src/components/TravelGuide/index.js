import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TravelItem from '../TravelItem'

class TravelGuide extends Component {
  state = {isLoading: false, locationsList: []}

  componentDidMount() {
    this.getTravelGuidePackagesApi()
  }

  getTravelGuidePackagesApi = async () => {
    this.setState({isLoading: true})

    const ApiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(ApiUrl, options)
    if (response.ok) {
      const responseData = await response.json()

      const updatedLocationsList = responseData.packages.map(eachList => ({
        id: eachList.id,
        name: eachList.name,
        imageUrl: eachList.image_url,
        description: eachList.description,
      }))

      this.setState({locationsList: updatedLocationsList, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderLocationsList = () => {
    const {locationsList} = this.state

    return (
      <ul className="unordered-locations">
        {locationsList.map(eachLocation => (
          <TravelItem travelDetails={eachLocation} key={eachLocation.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="main-container">
        <h1 className="main-heading">Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="travel-guide-container">
          {isLoading ? this.renderLoader() : this.renderLocationsList()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
