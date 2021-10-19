import React from 'react'

const Word = ({selectedWord, correctLetters}) => {
    return (
        <div className="word" id='word'>
            {
                selectedWord.split('').map((letter, i) => {

                    letter = letter.toLowerCase()

                    if (i === 0) {
                        letter = letter.toUpperCase()
                    }

                    return (
                        <span className='letter' key={i}>
                            {correctLetters.includes(letter.toLowerCase()) ? letter : ''}
                        </span>
                    )
                })
            }

            <span className='counter'>
                ({selectedWord.length})
            </span>
        </div>
    )
}

export default Word
