import React from 'react'
import {withRouter} from 'react-router'

const AdminHeader = (props) => {
    return (
        <header>
            <h1>Admin Place</h1>
            <button
                className="redirect-button"
                onClick={() => props.history.push('/')}    
            >
                Back to the Game
            </button>
        </header>
    )
}

export default withRouter(AdminHeader)
