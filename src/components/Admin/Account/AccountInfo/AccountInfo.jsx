import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth"


import capitalize from '../../Control Panel/Scripts/Capilazate'
import bringDataFromFirebase from './Firebase Querys/bringDataFromFirebase'
import HeaderAccount from './HeaderAccount/HeaderAccount'
import hideRefferCode from './Scripts/hideRefferCode'

const AccountInfo = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState(false)
    const [position, setPosition] = useState('')

    const [refferCode, setRefferCode] = useState('')
    const [refferCodeHide, setRefferCodeHide] = useState(true)

    const [loading, setLoading] = useState(true)

    const closeSession = async () => {

    }

    const applyResult = (result) => {

        setName(result['name'])
        setPosition(result['position'])
        setRefferCode(result['refferCode'])
    }

    const bringData = async (email) => {

        const result = await bringDataFromFirebase(email)
        
        await console.log(result);
        
        await applyResult(await result)

        setLoading(false)
    }

    React.useEffect(() => {


        const auth = getAuth()

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setEmail(user.email)
                bringData(user.email)
            }
        })
    
        

        
        

    }, [])

    return (
        <>
            <HeaderAccount name={'Fran'} />

            {
                loading ? 
                    <h1>aaa</h1>
                :
            <div className="info-account">
                <h2>{name}</h2>
                <h3>{capitalize(position)}</h3>

                <button
                    onClick={() => closeSession()}
                >
                    Close Session
                </button>

                <h3>{email}</h3>

                <div className="reffer-code-container">

                    <h3>{refferCodeHide ? hideRefferCode(refferCode) : refferCode}</h3>
                    <button
                        onClick={() => setRefferCodeHide(!refferCodeHide)}
                    >
                        👁️
                    </button>
                </div>
            </div>
            }

        </>
        
    )
}

export default AccountInfo
