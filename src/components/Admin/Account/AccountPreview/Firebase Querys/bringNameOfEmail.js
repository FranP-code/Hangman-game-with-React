import { doc, getDoc, getDocs, getFirestore, collection } from "firebase/firestore";
import { firestore } from "../../../../../Firebase/Firebase_Config"


const bringNameOfEmail = async (email) => {

    try {

        const id = email
        console.log(email)

        const db = getFirestore(firestore)
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);


        console.log(docSnap.data())
        return await docSnap.data()
        
    } catch (error) {
        console.log(error)
    }
}

export default bringNameOfEmail
