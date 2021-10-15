import {firestore} from '../../../../Firebase/Firebase_Config'
import { getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';
import GetRandomCategory from './GetRandomCategory';

const BringTheWords = async (language = false, category = false) => {

    if (!language) {

        language = 'english'

    }

    if (!category) {

        category = await GetRandomCategory()
        
    }
    
    try {

        const db = getFirestore(firestore)
        const data = collection(db, `hangman_words/${language}/${category}`)
        const result = await getDocs(data)

        const words = await result.docs.map(doc => doc.id)

        return words

    } catch (error) {
        console.log(error)
    }
}

export default BringTheWords
