import React from 'react'

const Square = (props) => {
    let {backgroundColor} = props
    const styles = {
        border: '2px solid',
        padding: '20px',
        backgroundColor,
    }
    return (
        <div style={styles}>
        </div>
    )




}

export default Square