import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AdminFunctionButton from "./AdminFunctionButton";
import {withRouter} from 'react-router'
import Actions from "./Actions/Actions";
import AdminHeader from "../Header/AdminHeader";

const ControlPanel = (props) => {

    const [userLogged, setUserLogged] = React.useState(false)
    const [actualAction, setActualAction] = React.useState('')

    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {

        if (!user) {

            props.history.push('/identify')

        } else {
            setUserLogged(true)
        }
    })

    return (
        <>
        <AdminHeader />
            <div className="control-panel">
                {
                    userLogged ?
                        <>
                            <AdminFunctionButton action={'Add Word(s)'} setActualAction={setActualAction}/>
                            <AdminFunctionButton action={'Add Category'} setActualAction={setActualAction}/>
                            <AdminFunctionButton action ={'Delete Category'} setActualAction={setActualAction}/>
                            <AdminFunctionButton action ={'Delete Word'} setActualAction={setActualAction}/>
                            <AdminFunctionButton action ={'Edit Word'} setActualAction={setActualAction}/>
                        </>
                    : null
                }
                {
                    actualAction ?
                        <Actions actualAction={actualAction}/>
                    : null
                }
            </div>
        </>
    )
}

export default withRouter(ControlPanel)