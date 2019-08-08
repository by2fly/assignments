import React from 'react';

const Spot = (props)=> {
    let {place, price,timeToGo} = props

const styles = {
    border: '1px solid',
    padding: '20px,'
    // backgroundColor: 'red'
}   
    return (
        <div style={styles}>
            <h3>{place}</h3>
            <h3>{price}</h3>
            <h3>{timeToGo}</h3>
        </div>

    )


}

export default Spot;