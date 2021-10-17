import { firestore } from "../../../Firebase/Firebase_Config"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import AdjustHeightCategories from "../../Scripts/AdjustHeightCategories";
import capitalize from "../../Scripts/Capilazate";


const Bring_All_Categories = async (setCategories, setStrech, language) => {

    console.log(language)

    
        
        try {

            const db = getFirestore(firestore)
            const data = await collection(db, 'categories')
            const result = await getDocs(data)

            let categories
            
            if (language === 'english') {

                categories = result.docs.map(doc => doc.data().english)
            }
            
            if (language === 'spanish') {
                categories = result.docs.map(doc => doc.data().spanish)

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
