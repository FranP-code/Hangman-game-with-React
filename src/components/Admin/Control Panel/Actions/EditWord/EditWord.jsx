import React from 'react'

const EditWord = () => {
    return (
        <div className="action-form edit-word">
            <form>
                <select>
                    <option>Select category</option>    
                </select>
                <select>
                    <option>Select word</option>
                </select>
                <input type="text" placeholder="Place the new word" />
                <input type="submit" value="Delete" />
            </form>
        </div>
    )
}

export default EditWord
