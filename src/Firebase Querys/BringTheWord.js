import {firestore} from '../Firebase/Firebase_Config'
import { getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore';
import GetRandomCategory from './GetRandomCategory';
import SelectRandomWord from './SelectRandomWord';

const BringTheWords = async (language, category, selectedWord) => {

    if (!selectedWord) {

        if (!category || category === 'false') {

            category = await GetRandomCategory(language)
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
