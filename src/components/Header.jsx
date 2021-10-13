import React, {useState} from 'react'

const Header = (props) => {

    const [title, setTitle] = useState('')
    const [categoryName, setCategoryName] = useState('')

    React.useEffect( () => {

        if (props.language === 'english') {
            
            setTitle('Hangman game')
            setCategoryName('Select category')
        }

        if (props.language === 'spanish') {

            setTitle('Ahorcado')
            setCategoryName('Select category')
        }
    })

    return (
        <header>
            <h1>{title}</h1>
            <h2>{categoryName}</h2>
        </header>
    )
}

export default Header
