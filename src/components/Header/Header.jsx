import React, {useState} from 'react'

const Header = ({language, displayCategories, setDisplayCategories}) => {

    const [title, setTitle] = useState('')
    const [categoryText, setCategoryText] = useState('')

    React.useEffect( () => {

        if (language === 'english') {
            
            setTitle('Hangman game')
            setCategoryText('Select category')
        }

        if (language === 'spanish') {

            setTitle('Ahorcado')
            setCategoryText('Seleccionar categoría')
        }
    })

    return (
        <header>
            <h1>{title}</h1>
            <h2
                onClick={() => setDisplayCategories(!displayCategories)}
            >
                {categoryText}
            </h2>
        </header>
    )
}

export default Header
