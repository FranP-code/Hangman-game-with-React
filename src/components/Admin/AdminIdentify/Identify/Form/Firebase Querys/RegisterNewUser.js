import { firestore } from '../../../../../../Firebase/Firebase_Config'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const RegisterNewUser = async (email, password, setMessage) => {
    
    const auth = getAuth()

    try {
        
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)

    } catch (error) {
        setMessage('There has been an error registering the user. Please try again later')
        console.log(error)
    }
}

export default RegisterNewUser
