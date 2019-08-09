import React from 'react';
import Friend from './Friend';


const FriendsList = (props) => {
    console.log(props);

const { friends }= props;

const mappedFriends = friends.map((friend, i) => <Friend key={i} name={friend.name} age={friend.age} pets={friend.pets} />
)
    return (
        <div>
            { mappedFriends }
        </div>

    )

}
export default FriendsList