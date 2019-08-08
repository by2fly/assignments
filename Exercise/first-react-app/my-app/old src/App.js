import React from 'react'
import './styles.css' 
import Header from '/Head.js'
import Body from '/Body.js'
import Footer from '/Footer.js'


const App =() => {
    return (
            <div className='app-container</div>
                <Header />
                <Body  />
                <Footer />
            )


}
ReactDOM.render(<App />, document.getElementById('root'));


export default App