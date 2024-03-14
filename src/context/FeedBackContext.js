import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'


const FeedBackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback Item 1',
            rating: 6
        },
        {
            id: 2,
            text: 'This is Feedback Item 2',
            rating: 4
        },
        {
            id: 3,
            text: 'This is Feedback Item 3',
            rating: 10
        },
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to remove this?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (<FeedBackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback
          }}
        >
          {children}
        </FeedBackContext.Provider>
    )
}

export default FeedBackContext