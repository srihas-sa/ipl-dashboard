import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

// import SimilarProductItem from '../SimilarProductItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TeamMatches extends Component {
  state = {
    recentmatches: [],
    latestmatches: {},
    apiStatus: apiStatusConstants.initial,

    teambann: {},
  }

  componentDidMount() {
    this.getProductData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manofthematch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingteam: data.competing_team,
    competingteamlogo: data.competing_team_logo,
    firstinnings: data.first_innings,
    second_innings: data.second_innings,
    match_status: data.match_status,
  })

  getFormattedData1 = data => ({
    umpires: data.umpires,
    result: data.result,
    manofthematch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingteam: data.competing_team,
    competingteamlogo: data.competing_team_logo,
    firstinnings: data.first_innings,
    secondinnings: data.second_innings,
    matchstatus: data.match_status,
  })

  getFormattedData2 = data => ({
    teambannerurl: data.team_banner_url,
  })

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData.recent_matches)
      const updatedlatestmatches = this.getFormattedData1(
        fetchedData.latest_match_details,
      )
      const bannerimage = this.getFormattedData2(fetchedData)
      console.log(bannerimage)
      console.log(updatedlatestmatches)
      const updatedrecentmatches = fetchedData.recent_matches.map(
        eachSimilarProduct => this.getFormattedData1(eachSimilarProduct),
      )
      console.log(updatedrecentmatches)
      this.setState({
        recentmatches: updatedrecentmatches,
        latestmatches: updatedlatestmatches,
        teambann: bannerimage,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <button type="button" className="button">
        Continue Shopping
      </button>
    </div>
  )

  renderProductDetailsView = () => {
    const {recentmatches, latestmatches, teambann} = this.state
    console.log(teambann)
    return (
      <div className="background">
        <img
          src={teambann.teambannerurl}
          alt="team banner"
          className="mainimage"
        />
        <h1>Latest Matches</h1>
        <LatestMatch detail={latestmatches} />
        {recentmatches.map(eachdet => (
          <div>
            <MatchCard detail={eachdet} key={eachdet.id} />
          </div>
        ))}
      </div>
    )
  }

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="product-item-details-container" data-testid="loader">
          {this.renderProductDetails()}
        </div>
      </>
    )
  }
}

export default TeamMatches
