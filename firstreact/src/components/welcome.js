import React from 'react'
import Message from './message'

function Welcome() {

    let score = 88

    const alienShip=()=>{
        return (
            <div>I am from Mars!</div>
        )
    }
    const buttonClicked=()=>{
        console.log("Button Clicked")
    }

    return (
        <div>
            <div>
                <h1>Welcome!</h1>
                <ol>
                    <li>One</li>
                    <li>Two</li>
                </ol>
            </div>
            <div>
                <h1>Score: {score}</h1>
            </div>
            <div>
                <h1>Coming from Mars: {alienShip()}</h1>
            </div>
            <div>
                <button onClick={buttonClicked}>Click</button>
                <li>Some</li>
            </div>
            <div>
                <Message msg="Hello from mars">i</Message>
                <Message msg="Hello from Saturn">ii</Message>
                <Message msg="Hello from IIS">iii</Message>
                <Message msg="learn to live on mars">iv</Message>
                <Message msg="learn to live on diet pill">v</Message>
            </div>
        </div>
    );
}

export default Welcome;
