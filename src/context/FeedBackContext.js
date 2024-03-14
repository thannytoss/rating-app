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
    // Edit Feedback Item
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    // Add Feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // Delete Feedback item
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to remove this?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (<FeedBackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback, //edit function
            feedbackEdit, // edit state
          }}
        >
          {children}
        </FeedBackContext.Provider>
    )
}

export default FeedBackContext