import React from 'react'
import DefineClassName from './Actions/Scripts/DefineClassName'

const AdminFunctionButton = ({action, setActualAction}) => {
  
    const classButton = DefineClassName(action)

    return (
        <button
            className={classButton}
            onClick={() => setActualAction(action)}
        >
            {action}
        </button>
    )
}

export default AdminFunctionButton
