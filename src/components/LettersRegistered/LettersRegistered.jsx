import React from 'react'

const LettersRegistered = ({lettersRegistered, setLettersRegistered}) => {

    return (
        <div className="letters-registered">
            {
                lettersRegistered.map(letter => 

                    <span key={letter}>{letter}</span>
                )
            }
        </div>
    )
}

export default LettersRegistered
