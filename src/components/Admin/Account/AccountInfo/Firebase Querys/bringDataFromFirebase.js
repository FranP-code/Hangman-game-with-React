import { doc, getFirestore, getDoc } from "firebase/firestore"
import { firestore } from "../../../../../Firebase/Firebase_Config"

const bringDataFromFirebase = async (email) => {

    const data = {}
        
        try {

            console.log(email)
        
            const db = getFirestore(firestore)
            const reference = doc(db, 'users', email)
            const documentSnap = await getDoc(reference)

            return await documentSnap.data()

    } catch (error) {
        console.log(error)
    }

}

export default bringDataFromFirebase
