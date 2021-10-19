import CheckVictory from "./CheckVictory";
import alphabet from './alphabet.js'

const Register_Input = (actualWord, hangmanFrame, setHangmanFrame, setIsVictory, setIsDefeat) => {

    const keyRegister = (event) => {
        
        const currentKey = event.key.toLowerCase()

        if (hangmanFrame <= 5 && alphabet.includes(currentKey) ) {

            actualWord = actualWord.toLowerCase()
            
            const puzzleWord = document.getElementById('puzzleWord')

            const letters = []

            if (actualWord.search(currentKey) + 1) {
                
                for (let i = 0; i < actualWord.length; i++) {
                    
                    if (currentKey === actualWord[i]) {
                        letters.push(i)
                    }
                }
            
                letters.forEach(letter => {
                    
                    const index = letter

                    if (index === 0) {

                        puzzleWord.children[index].textContent = currentKey.toUpperCase()
                    }

                    else {
                        puzzleWord.children[index].textContent = currentKey
                    }


                });


                CheckVictory(setIsVictory)
                
            } else {
                
                setHangmanFrame(hangmanFrame + 1)

                if (hangmanFrame === 5) {

                    for (let i = 0; i < actualWord.length; i++) {
            
                        let letter = document.createElement('span')
                        
                        letter.className = 'letter'

                        letter.textContent = actualWord[i]

                        if (i === 0) {

                            letter.textContent = letter.textContent.toUpperCase()
                        }

                        
                        puzzleWord.replaceChild(letter, puzzleWord.children[i])
                    }

                    setIsDefeat(true)
        
                }

            }

        }        
    }

    const removeRegisterInput = () => {
            
        window.removeEventListener('keyup', keyRegister)        
    }

    window.addEventListener('keyup', keyRegister)
}

export default Register_Input
