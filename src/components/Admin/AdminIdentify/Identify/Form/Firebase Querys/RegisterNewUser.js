import { firestore } from '../../../../../../Firebase/Firebase_Config'
import {getAuth, createUserWithEmailAndPassword, } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'

const RegisterNewUser = async (name, email, password, setMessage, position, refferCode) => {
    
    const auth = getAuth()

    try {
        
        const responseUserCreate = await createUserWithEmailAndPassword(auth, email, password)
        console.log(responseUserCreate)

        const db = getFirestore(firestore)

        await setDoc(doc(db, 'users', email), {

            name: name,
            position: position,
            refferCode: refferCode
        })

    } catch (error) {
        setMessage('There has been an error registering the user. Please try again later')
        console.log(error)
    }
}

export default RegisterNewUser
