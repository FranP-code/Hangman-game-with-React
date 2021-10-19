import React from 'react'

const checkVictory = (setEndOfGame) => {

    let parent_element = document.getElementById('word').childNodes
        parent_element = [...parent_element]

    let result = true

    parent_element.forEach(children => {
    
        if (children.innerText === '') {
            result = false
        }

    });

    console.log(result)
    
    if (result) {
       
        setEndOfGame('Victory')
    }
    return (
        <div>
            
        </div>
    )
}

export default checkVictory
