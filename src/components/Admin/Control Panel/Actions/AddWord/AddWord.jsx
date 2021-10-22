import React from 'react'

const AddWord = () => {

    console.log('word');

    return (
        <div className="form-add-word">
            <form>
                <textarea placeholder="Add the word/words separated by commas" cols="30" rows="10"></textarea>
                <input type="submit" value="Add Word(s)" />
            </form>
        </div>
    )
}

export default AddWord
