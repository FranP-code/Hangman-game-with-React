import React, {useState} from 'react'
import { images } from './Images'

const Hangman = () => {

    const [hangmanFrame, setHangmanFrame] = useState(0)
    
    return (
        <div className="hangman">
            <img src={images[hangmanFrame]} alt="" />
        </div>
    )
}

export default Hangman
