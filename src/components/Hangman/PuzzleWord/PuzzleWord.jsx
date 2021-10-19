import React, {useState} from 'react'
import Register_Input from '../../Scripts/Register input'
import SelectRandomWord from '../../Scripts/SelectRandomWord'
import BringTheWords from './Firebase Querys/BringTheWords'

const PuzzleWord = ({hangmanFrame, setHangmanFrame, currentScore, setCurrentScore, setIsVictory, setIsDefeat, displayApp, setDisplayApp, language, category, categoryIsReady}) => {

    const [actualWord, setActualWord] = useState('')

    React.useEffect(() => {

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

        const definePuzzle = async () => {
        
            const words = await BringTheWords(language, category, actualWord)
            const wordSelection = await SelectRandomWord(words)
            
            const word = await words[wordSelection]
    
            setActualWord(word)

        }
        
        if (!displayApp && !actualWord) {

                definePuzzle()
            
        }

        
        if (actualWord && !displayApp) {

            generatePuzzleWord()
            setDisplayApp(true)
    
        }
        
    }, [actualWord, category, displayApp, language, setDisplayApp])

    if (displayApp && actualWord) {

        Register_Input(actualWord, hangmanFrame, setHangmanFrame, setIsVictory, setIsDefeat)
    }
    React.useEffect(() => {



        


    }, [hangmanFrame, displayApp, actualWord, setHangmanFrame, setIsDefeat, setIsVictory, categoryIsReady, category])
    
    
   
    
    return (
        <>
            <div className="puzzleWord" id="puzzleWord"></div>
        </>
    )
}

export default PuzzleWord
