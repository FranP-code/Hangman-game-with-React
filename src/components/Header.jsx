import React, {useState} from 'react'

const Header = (props) => {

    const [title, setTitle] = useState('')
    const [categoryText, setCategoryText] = useState('')

    React.useEffect( () => {

        if (props.language === 'english') {
            
            setTitle('Hangman game')
            setCategoryText('Select category')
        }

        if (props.language === 'spanish') {

            setTitle('Ahorcado')
            setCategoryText('Seleccionar categoría')
        }
    })

    return (
        <header>
            <h1>{title}</h1>
            <h2>{categoryText}</h2>
        </header>
    )
}

export default Header
