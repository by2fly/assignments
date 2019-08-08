import React from 'react'
import Box from './Box'

import boxes from './boxes.json';

class BoxContainer extends React.Component {
    constructor(){
        super()
    }
    render(){
        const mappedBoxes = boxes.map((box)=> <Box title={box.title} subtitle={box.subtitle} backgroundColor={box.backgroundColor} />)
        return (
        <div id='boxContainer'>
            {mappedBoxes}
        </div>
    
    )
}
}
export default BoxContainer