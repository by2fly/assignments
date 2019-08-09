import React from 'react';
import Square from './square';
import './styles.css'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            squares: ['white', 'red', 'blue', 'purple']
        } 
    }
    blackOrWhite = (i) => {
        if(this.state.squares[i] === 'white'){
            this.setState({
                    squares: ['black', 'black', 'black', 'black']
            })
    
    } else if (this.state.squares[i] === 'black') {
        this.setState({
                squares: ['white', 'white', 'white', 'white']
        })
    } else {
        console.log('Yo, not black or blackOrWhite')

    }

    }
    
//   const mappedSquares = this.state.squares.map((item, i) => {
    render() {  
        const mappedSquares = this.state.squares.map()square, i) => {
            <div> className='square' style={{background: square}} onClick={() => {this.blackOrWhite(i)} key={i}</div>

        }  
        return (
        <div className='app-container'>
            { mappedSquares }
        </div>
    }
    }