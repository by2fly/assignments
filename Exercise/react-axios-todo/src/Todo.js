import React from 'react'



const Todo = (props) => {
        let {title, description, price, imgUrl} = props.todo
    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h3>{price}</h3>
            <img src ={imgUrl} alt=""/>
        </div>

    )
}