import React, {useState} from 'react'
import Register_Input from '../../Scripts/Register input'
import SelectRandomWord from '../../Scripts/SelectRandomWord'
import Defeat from './Defeat'
import BringTheWords from './Firebase Querys/BringTheWords'
import Victory from './Victory'

const PuzzleWord = ({hangmanFrame, setHangmanFrame, currentScore, setCurrentScore, setIsVictory, setIsDefeat, displayApp, setDisplayApp, language, category}) => {

    const [actualWord, setActualWord] = useState('')

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
        const definePuzzle = async () => {
        
            const words = await BringTheWords(language, category)
            const wordSelection = await SelectRandomWord(words)
            
            const word = await words[wordSelection]
    
            await setActualWord(word)

        }
        if (!displayApp && !actualWord) {

            definePuzzle()
        }

        
        if (actualWord && !displayApp) {

            generatePuzzleWord()
            setDisplayApp(true)
    
        }
        
    }, [actualWord])


    React.useEffect(() => {

        if (displayApp) {

            Register_Input(actualWord, hangmanFrame, setHangmanFrame, setIsVictory, setIsDefeat)
        }


    }, [hangmanFrame, displayApp])
    
    
   
    
    return (
        <>
            <div className="puzzleWord" id="puzzleWord"></div>
        </>
    )
}

export default PuzzleWord
