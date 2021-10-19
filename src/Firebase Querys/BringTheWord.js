import {firestore} from '../Firebase/Firebase_Config'
import { getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';
import GetRandomCategory from './GetRandomCategory';
import SelectRandomWord from './SelectRandomWord';

const BringTheWords = async (language = 'english', category = false, selectedWord) => {

    if (!selectedWord) {

        
        console.log(category)
        console.log(language)

        if (!category || category === 'false') {

            category = await GetRandomCategory()
            
        }
        
        try {

            const db = getFirestore(firestore)
            const data = collection(db, `hangman_words/${language}/${category}`)
            const result = await getDocs(data)
            
            
            const words = await result.docs.map(doc => doc.id)            
            const word = await SelectRandomWord(await words)

            return await word

        } catch (error) {
            console.log(error)
        }
    }
}

export default BringTheWords
