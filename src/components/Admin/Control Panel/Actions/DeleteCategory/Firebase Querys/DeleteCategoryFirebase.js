import { firestore } from "../../../../../../Firebase/Firebase_Config";
import { getFirestore, doc, deleteDoc, getDoc,  collection, getDocs, listDocuments } from "firebase/firestore";

const DeleteCategoryFirebase = async (category, setData) => {
    
    try {

        const db = getFirestore(firestore)
        await deleteDoc(doc(db, 'categories', category))
        
    } catch (error) {

        setData({
            sucess: false,
            message: `There's been an error deleting the category ${category}`
        })
        
    }
}

export default DeleteCategoryFirebase
