import React from 'react'

const LetterInput = ({registerKeys}) => {

    const registerInput = (letter) => {

        const input = document.getElementById('letter-input')

        input.value = ''
    }

    return (
        <div className="letter-input-container">
            <input id="letter-input" type="text" onChange={(e) => registerInput(e.target.value) } />
        </div>
    )
}

export default LetterInput
