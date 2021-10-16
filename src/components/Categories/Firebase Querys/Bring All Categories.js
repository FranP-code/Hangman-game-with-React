import { firestore } from "../../../Firebase/Firebase_Config"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import AdjustHeightCategories from "../../Scripts/AdjustHeightCategories";
import capitalize from "../../Scripts/Capilazate";


const Bring_All_Categories = async (setCategories, setStrech, language) => {

    
    try {

        const db = getFirestore(firestore)
        const data = await collection(db, 'categories')
        const result = await getDocs(data)

        let categories = await result.docs.map(doc => doc.id)

            if (language === 'english') {
                categories = result.docs.map(doc => doc.english)

            }

            if (language === 'spanish') {
                categories = result.docs.map(doc => doc.english)

            }
        
            categories = categories.map(word => capitalize(word, true))

        console.log(categories)
        setCategories(await categories)

        AdjustHeightCategories(await categories, setStrech)
        
    } catch (error) {
        console.log(error)
    }
}

export default Bring_All_Categories
