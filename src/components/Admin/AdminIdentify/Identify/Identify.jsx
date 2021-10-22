import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Form from './Form/Form'
import {withRouter} from 'react-router'


const Identify = (props) => {

    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {

        if (user) {
            props.history.push('/admin-place')
        } 
    })

    return (
        <Form />
    )
}


export default withRouter(Identify)
