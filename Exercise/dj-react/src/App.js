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
    blackOrWhite = () => {
        if(this.state.squares[0] === 'white'){
            this.setState({
                    squares: ['black', 'black', 'black', 'black']
            })
    
    } else if (this.state.squares[1] === 'black') {
        this.setState({
                squares: ['white', 'white', 'white', 'white']
        })
    } else {
        console.log('Yo')

    }

    }
    
//   const mappedSquares = this.state.squares.map((item, i) => {
    render() {    
        return (
        <div className='app-container'>
             <div className="square" style={{background: this.state.squares[0]} onClick={this.blackOrWhite}></div>
             <div className="square" style={{background: this.state.squares[1]}}></div>
             <div className="square" style={{background: this.state.squares[2]}}></div>
             <div className="square" style={{background: this.state.squares[3]}}></div>
        </div>
    }
    }
    )
}

export default App