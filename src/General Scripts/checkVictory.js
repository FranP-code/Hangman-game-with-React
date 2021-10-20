import React from 'react'

const checkVictory = (setEndOfGame) => {

    console.log('check victory exec')

    let parent_element = document.getElementById('word').childNodes
        parent_element = [...parent_element]

    let result = true

    parent_element.forEach(children => {

        console.log(children.innerText)
    
        if (children.innerText === '') {
            result = false
        }

    });

    console.log(result)
    
    if (result) {
       
        setEndOfGame('Victory')
    }
}

export default checkVictory
