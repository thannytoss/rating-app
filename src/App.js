import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats.jsx"
import FeedbackForm from "./components/FeedbackForm.jsx"
import AboutIconLink from './components/AboutIconLink.jsx'
import About from './pages/About.jsx'
import { FeedbackProvider } from './context/FeedBackContext.js'



function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact 
                            path='/' 
                            element={
                                <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList  />
                                </>
                            }               
                            ></Route>
                        <Route path='/about' element={<About />} />
                    </Routes>

                </div>
                    <AboutIconLink/>
            </Router>
        </FeedbackProvider>
        
    ) 
}

export default App