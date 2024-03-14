import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import FeedBackContext from '../context/FeedBackContext'

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedBackContext)
 
    return (
        <Card>
            <div className="num-display">{item.rating}
            </div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color ='red'/>
            </button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit color='grey'/>
            </button>
            <div className="text-display">{item.text}
            </div>
        </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem