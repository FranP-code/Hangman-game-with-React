import React from 'react'

const Victory = ({currentScore, setCurrentScore, language}) => {

    const [text, setText] = React.useState('')

    React.useEffect(() => {

        setCurrentScore(parseInt(currentScore) + 1)

        if (language === 'english') {

            setText('VICTORY')
        }

        if (language === 'spanish') {

            setText('VICTORIA')
        }
        
    }, [])

    return (
        <div className="victory animate__animated animate__backInDown">
            <h1>{text}</h1>
        </div>
    )
}

export default Victory
