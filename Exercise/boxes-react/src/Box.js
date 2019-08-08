import React from 'react';

const Box = (props) => {
    let {backgroundColor, title, subtitle} = props;
    const styles = {
        border: '1px solid',
        padding: '20px',
        backgroundColor,
    }
    
    return (
        <div style={styles}>
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
        </div>
    )
}

export default Box;