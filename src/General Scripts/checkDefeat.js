const checkDefeat = (setEndOfGame, hangmanFrame, setCorrectLetters, selectedWord, mobileUser) => {
    
    if (hangmanFrame >= 5) {
        setCorrectLetters([...selectedWord])
        setEndOfGame('Defeat')

        console.log(navigator.keyboard)
        if (!mobileUser && navigator.keyboard) {

            navigator.keyboard.lock();
        }

    }
}

export default checkDefeat
