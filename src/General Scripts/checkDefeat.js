const checkDefeat = (setEndOfGame, hangmanFrame, setCorrectLetters, selectedWord) => {
    
    if (hangmanFrame >= 5) {
        setCorrectLetters([...selectedWord])
        setEndOfGame('Defeat')

        navigator.keyboard.lock();

    }
}

export default checkDefeat
