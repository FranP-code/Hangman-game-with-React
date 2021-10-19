import React from 'react'

const Victory = ({currentScore, setCurrentScore}) => {

    React.useEffect(() => {

        setCurrentScore(parseInt(currentScore) + 1)
        
    }, [])

    return (
        <div className="victory animate__animated animate__backInDown">
            <h1>VICTORY</h1>
        </div>
    )
}

export default Victory
