const SelectRandomWord = (arrayWords) => {

    const randomWord = Math.trunc(

        Math.random() * (arrayWords.length - 0) + 0
    )

    return randomWord
}

export default SelectRandomWord