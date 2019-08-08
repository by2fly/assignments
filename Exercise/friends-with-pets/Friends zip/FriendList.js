import React from 'react'
import Friend from './Friend.js'

const FriendList = (props) => {
    // console.log(props)
    //Output: Object containing Friends
        //Friends is an array of 4 items
    
    //const mappedFriends = props.friends.map()

    const { friends } = props

    const mappedFriends = friends.map( (friend, i) => {
        return (
            <Friend key={i} name={friend.name} age={friend.age} pets={friend.pets} />
        )
    })

    return(
        <div>
            { mappedFriends }
        </div>
        
    )
}

export default FriendList