import React from 'react'
import { Switch, Route } from 'react-router-dom'


//. my components
import Home from './Home'
import About from './About'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'
import './styles.js'

// NEED
// BrowserRouter'   teaches your About how to be SPA
// Switch'     allows you to load a specific component
// Route(s)    define the compnonent that should be loaded when a url changes
// Links       allows the user to change component view


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>   
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/services' component={Services} />
                {/* <Route path="*"         component/> */}     
            </Switch>
            <Footer />
        </div>
    )

}
export default App