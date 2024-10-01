import React, { useState } from 'react'
import Game from './Game'

const StartPage = () => {
    const [start, setStart] = useState(false)
    return (
        <div>
            <div style={!start ? { display: "block" } : { display: "none" }}>
                <h2>Memory Test</h2>
                <button onClick={() => setStart(true)}>Start</button>
            </div>
            <div style={start ? { display: "block" } : { display: "none" }}>
                <Game />
            </div>
        </div>
    )
}

export default StartPage
