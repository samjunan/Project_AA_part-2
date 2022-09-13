import React, { useState } from 'react';
import MessageSize from './messagesize.js'
function Message(props) {

    const [likes, updateLikes] = useState(0)
    const increaseLikes=()=>{
        updateLikes(likes + 1)
    }
    return (  
    <div>
        <p>
            Message {props.children}: {props.msg}
            <br />
            <button onClick={increaseLikes}>Like</button> {likes}
            <br />
            Size: <MessageSize msg={props.msg}></MessageSize>
        </p>
    </div>
    );
}

export default Message;