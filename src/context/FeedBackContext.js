import { createContext, useState } from "react"

const FeedBackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this item is from context',
            rating: 10
        }
    ])

    return (<FeedBackContext.Provider value={{
            feedback,
          }}
        >
          {children}
        </FeedBackContext.Provider>
    )
}

export default FeedBackContext