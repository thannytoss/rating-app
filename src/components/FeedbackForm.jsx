import { useState, useContext, useEffect } from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedBackContext from '../context/FeedBackContext'

function FeedbackForm({}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { addFeedback, feedbackEdit } = useContext(FeedBackContext)

    useEffect (() => {
        if(feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === ''){
            setbtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setbtnDisabled(false)

        }

        setText(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            addFeedback(newFeedback)

            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handlesubmit}>
            <h2> Please leave a comment and a rating!</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleTextChange} 
            type="text" 
            placeholder=' Write a Comment Here'
            value={text}
            />
            
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
            
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
