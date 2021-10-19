const checkDefeat = (setEndOfGame, hangmanFrame) => {
    
    if (hangmanFrame >= 5) {
        setEndOfGame('Defeat')
    }
}

export default checkDefeat
