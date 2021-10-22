import React from 'react'

const AddWord = () => {

    console.log('word');

    return (
        <div className="action-form add-word">
            <form>
                <select>
                    <option>Select language</option>
                </select>
                <select>
                    <option>Select category</option>
                </select>
                <textarea placeholder="Add the word/words separated by commas" cols="30" rows="10"></textarea>
                <input type="submit" value="Add Word(s)" />
            </form>
        </div>
    )
}

export default AddWord
