import React from 'react';
import Square from './square';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            squares: ['white', 'red', 'blue', 'purple']
        } 
    }
    
  const mappedSquares = this.state.squares.map((item, i) => {
    render() {    
        return <div> <Square color={item}/> </div>;
          
    }
    }
    )
}

export default App