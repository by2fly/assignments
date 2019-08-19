import React from 'react'
import { withTheme } from './context/ThemeProvider.js'
import ThemeProvider from './context/ThemeProvider.js'


 
const App = (props) => {             //App does not need to be a CLASS
    console.log(props)


    return (
        <div className={`app app-${props.theme}`}>
            <button className='button' onClick={props.changeTheme}> Change Theme </button>
           
            <navbar className={`navbar navbar-${props.theme}`}> Navbar </navbar>
           <main className={`main main-${props.theme}`}> Main Body </main>
           <footer className={`footer footer-${props.theme}`}>Footer </footer>
        </div>

        
    ) 


  
}

  


// add the withTheme (props) to the export App
export default withTheme(App)