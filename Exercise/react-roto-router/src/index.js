import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import styled from 'styled-components'
// import './styles'

ReactDOM.render(
    <BrowserRouter>
        <App />    
    </BrowserRouter>,
    document.getElementById('root')
)

