import alphabet from './alphabet'

const AddLettersRegistered = (lastLetterRegistered, setLastLetterRegistered) => {

    const addLetterHistory = (event) => {

        const currentKey = event.key
        
        if (!lastLetterRegistered.includes(currentKey.toUpperCase()) && alphabet.includes(currentKey.toLowerCase())) {
            
            const array = [...lastLetterRegistered, currentKey.toUpperCase()]
            
            setLastLetterRegistered(array)
            console.log(lastLetterRegistered)
        }

        window.removeEventListener('keyup', addLetterHistory)   
    }

    window.addEventListener('keyup', addLetterHistory)
}

export default AddLettersRegistered
