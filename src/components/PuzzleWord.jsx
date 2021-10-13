import React, {useState} from 'react'

const PuzzleWord = () => {

    const [actualWord, setActualWord] = useState('murcielagos')
    const [hiddenWord, setHiddenWord] = useState('')

    console.log(actualWord.length)

    React.useEffect(() => {

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

    }, [])

    return (
        <div className="puzzleWord" id="puzzleWord">
            {hiddenWord}
        </div>
        
    )
}

export default PuzzleWord
