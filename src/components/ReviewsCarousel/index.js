// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {presentProfile: 0}

  leftClick = () => {
    this.setState(prev => {
      if (prev.presentProfile > 0) {
        return {presentProfile: prev.presentProfile - 1}
      }
      return prev
    })
  }

  rightClick = () => {
    const {reviewsList} = this.props
    this.setState(prev => {
      if (prev.presentProfile < reviewsList.length - 1) {
        return {presentProfile: prev.presentProfile + 1}
      }
      return prev
    })
  }

  render() {
    const {reviewsList} = this.props
    const {presentProfile} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      presentProfile
    ]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="profile-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.leftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="profile">
            <img src={imgUrl} className="image" alt={username} />
            <p className="username">{username}</p>
            <p className="paragraph">{companyName}</p>
            <p className="paragraph">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.rightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
