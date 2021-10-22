import React from 'react'

const AddCategory = () => {

    console.log('category');

    return (
        <div className="action-form add-category">
            <form>
                <input type="text" placeholder="Add the new category [English]" required/>
                <input type="text" placeholder="Add the new category [Spanish]" required/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AddCategory
