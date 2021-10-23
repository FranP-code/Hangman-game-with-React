import {firestore} from '../../../../../../Firebase/Firebase_Config'
import {getFirestore, collection, doc, setDoc } from "firebase/firestore";

const AddCategoryToFirebase = async (englishCategory, spanishCategory) => {
    
    let result =
        [
            sucess => false,
            message => ''
        ]

    try {
        
        const db = getFirestore(firestore)
        
        await setDoc(doc(db, 'categories', englishCategory), {

            english: englishCategory,
            spanish: spanishCategory
        })

        result['sucess'] = true
        result['message'] = 'Category added to the database'

        return await result

    } catch (error) {
        console.log(error)

        result['sucess'] = false
        result['message'] = `There's been an error...`
    }
}

export default AddCategoryToFirebase
