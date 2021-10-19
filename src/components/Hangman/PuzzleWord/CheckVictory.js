//import Victory from "../Hangman/PuzzleWord/Victory";

const CheckVictory = (setIsVictory) => {

    let allChildrenHaveText = true

    const puzzleWord = document.getElementById('puzzleWord')
    const childrens = [...puzzleWord.children]

    childrens.forEach(children => {
        
        if (children.textContent === '') {
            allChildrenHaveText = false
        }
    });

    if (allChildrenHaveText) {

        setIsVictory(true)
        
    }
}

export default CheckVictory
