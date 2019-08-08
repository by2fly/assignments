import React from 'react'
import './styles.css'
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

const App = () => {
    return(
        <div className='app-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App