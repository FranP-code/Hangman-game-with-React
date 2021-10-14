import React, {useState} from 'react'
import Register_Input from '../../Scripts/Register input'
import Defeat from './Defeat'
import Victory from './Victory'

const PuzzleWord = ({hangmanFrame, setHangmanFrame, currentScore, setCurrentScore, setIsVictory, setIsDefeat}) => {

    const [actualWord, setActualWord] = useState('papa')


    const generatePuzzleWord = () => {  
            
        const puzzleWord = document.getElementById('puzzleWord')
        
        for (let i = 0; i < actualWord.length; i++) {
            
            let letter = document.createElement('span')
            
            letter.className = 'letter'
            letter.textContent = ''
            
            puzzleWord.appendChild(letter)
        }
    
        const counter = document.createElement('span')
        counter.className = 'counter'
        counter.textContent = '(' + actualWord.length + ')'
    
        puzzleWord.appendChild(counter)
        
    }

    React.useEffect(() => {
        
        generatePuzzleWord()
        
    }, [])



    React.useEffect(() => {

        Register_Input(actualWord, hangmanFrame, setHangmanFrame, setIsVictory, setIsDefeat)
        
    }, [hangmanFrame])

   
    
    return (
        <>
            <div className="puzzleWord" id="puzzleWord"></div>
        </>
    )
}

export default PuzzleWord
