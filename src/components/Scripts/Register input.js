import CheckVictory from "./CheckVictory.jsx";

const Register_Input = (actualWord, hangmanFrame, setHangmanFrame, setIsVictory, setIsDefeat) => {

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    const keyRegister = (event) => {
        
        const currentKey = event.key.toLowerCase()
        
        console.log(hangmanFrame)

        if (hangmanFrame <= 5 && alphabet.includes(currentKey) ) {

            actualWord = actualWord.toLowerCase()
            
            const puzzleWord = document.getElementById('puzzleWord')

            const letters = []

            console.log(event.key)

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
                
                const quantity = hangmanFrame + 1
                setHangmanFrame(quantity)

                if (hangmanFrame === 5) {
                    setIsDefeat(true)
        
                }

                removeRegisterInput()
            }

        }
        
        
    }

    const removeRegisterInput = () => {
            
        window.removeEventListener('keyup', keyRegister)        
    }

    window.addEventListener('keyup', keyRegister)
}

export default Register_Input
