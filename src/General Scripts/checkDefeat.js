const checkDefeat = (setEndOfGame, hangmanFrame, setCorrectLetters, selectedWord, mobileUser = false) => {
    
    if (hangmanFrame >= 5) {
        setCorrectLetters([...selectedWord])
        setEndOfGame('Defeat')

        if (!mobileUser) {

            navigator.keyboard.lock();
        }

    }
}

export default checkDefeat
