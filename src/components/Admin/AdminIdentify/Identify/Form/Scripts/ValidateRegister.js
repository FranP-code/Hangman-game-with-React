import React from 'react'
import BringAdminCode from '../Firebase Querys/BringAdminCode'
import RegisterNewUser from '../Firebase Querys/RegisterNewUser'

const ValidateRegister = async (data, setMessage) => {
    
    const email = data[0]
    const password = data[1]
    const confirmPassword = data[2]
    const adminRefferCode = data[3]

    if (password.length < 6) {

        console.log('PASSWORD TOO SHORT')
        setMessage('Password too short')
        return false
    }

    if (password !== confirmPassword) {
        
        console.log('LAS CONTRASEÑAS NO COINCIDEN')
        setMessage('The Passwords not match')
        return false
    }

    const documents = await BringAdminCode()

    let adminRefferCodeIsValid = false

    documents.forEach(document => {
        
        if (adminRefferCode === document.code) {
            
            adminRefferCodeIsValid = true
            RegisterNewUser(email, password, setMessage)
        }
    });

    if (!adminRefferCodeIsValid) {
        setMessage('Admin Reffer Code not valid')
    }

}

export default ValidateRegister
