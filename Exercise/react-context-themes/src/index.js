import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './context/ThemeProvider.js'
import './styles.css'


ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,  
document.getElementById('root')) 
