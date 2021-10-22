import React from 'react'

const DeleteWord = () => {
    return (
        <div className="action-form delete-word">
            <form>
                <select>
                    <option>Select category</option>    
                </select>
                <select>
                    <option>Select word</option>
                </select>
                <input type="submit" value="Delete" />
            </form>
        </div>
    )
}

export default DeleteWord
