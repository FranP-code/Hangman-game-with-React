import React, {useState} from 'react'
import Register_Input from './Scripts/Register input'

const PuzzleWord = ({hangmanFrame, setHangmanFrame}) => {

    const [actualWord, setActualWord] = useState('murcielago')

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

        
        Register_Input(actualWord, hangmanFrame, setHangmanFrame)
        
    }, [hangmanFrame])
    
    
    return (
        <div className="puzzleWord" id="puzzleWord">
        
        </div>
        
    )
}

export default PuzzleWord
