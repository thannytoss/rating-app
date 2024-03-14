import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedBackContext from '../context/FeedBackContext'



function FeedbackStats() {
  const {feedback} = useContext(FeedBackContext)

  // Calculate average

  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/,'')

  return <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>

    </div>
  
}

export default FeedbackStats