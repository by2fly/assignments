import React from 'react';

const Box = (props) => {
    let {title, subtitle, info, backgroundColor} = props
    const styles = {
        border: '2px solid',
        padding: '20px',
        backgroundColor,
    }
   
   return (
        <div style={styles}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{info}</p>

        </div>
    )    
}
export default Box
