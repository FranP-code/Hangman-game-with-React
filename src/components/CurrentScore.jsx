import React from 'react'

const CurrentScore = (props) => {
    return (
        <div className='current-score'>
            <h2><span className='text'>Current Score: </span>{props.currentScore}</h2>
        </div>
    )
}

export default CurrentScore
