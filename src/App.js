import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats.jsx"
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm.jsx"
import AboutIconLink from './components/AboutIconLink.jsx'
import About from './pages/About.jsx'



function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to remove this?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact 
                            path='/' 
                            element={
                                <>
                                <FeedbackForm handleAdd={addFeedback}/>
                                <FeedbackStats feedback={feedback}/>
                                <FeedbackList feedback={feedback} 
                                handleDelete={deleteFeedback} />
                                </>
                            }               
                            ></Route>
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
                    <AboutIconLink/>
            </Router>
        
    ) 
}

export default App