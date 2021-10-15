import { firestore } from "../../../Firebase/Firebase_Config"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Bring_All_Categories = async (setCategories) => {

    const capitalize = (str, lower = false) =>
        (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());  /* CREDITS: https://stackoverflow.com/a/7592235*/
    
    try {

        const db = getFirestore(firestore)
        const data = await collection(db, 'categories')
        const result = await getDocs(data)

        let categories = await result.docs.map(doc => doc.id)
        
            categories = categories.map(word => capitalize(word, true))

        console.log(categories)
        setCategories(await categories)
        
    } catch (error) {
        console.log(error)
    }
}

export default Bring_All_Categories
