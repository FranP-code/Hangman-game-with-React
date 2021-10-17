import React from "react"
import AlmacenateCategory from "../Scripts/AlmacenateCategory"
import AlmacenateCurrentScore from "../Scripts/AlmacenateCurrentScore"
import { AlmacenateLanguage } from "../Scripts/AlmacenateLanguage"
import Bring_All_Categories from "./Firebase Querys/Bring All Categories"
import Bring_All_Languages from "./Firebase Querys/Bring All Languages"


const Categories = ({language, displayCategories, category, setCategory, currentScore, setLanguage}) => {

    const [categories, setCategories] = React.useState(false)
    const [languages, setLanguages] = React.useState(false)

    const [stretch, setStrech] = React.useState(false)

    const changeCategory = (categorie) => {

        categorie = categorie.toLowerCase()
        setCategory(categorie)

        localStorage.setItem('category', categorie)

        AlmacenateCurrentScore(currentScore)
        AlmacenateLanguage(language)

        window.location.reload(false)

    }

    const changeLanguage = (language) => {

        language = language.toLowerCase()
        setLanguage(language)

        localStorage.setItem('language', language)

        AlmacenateCurrentScore(currentScore)
        AlmacenateCategory(category)

        window.location.reload(false)
    }

    React.useEffect (() => {

        Bring_All_Categories(setCategories, setStrech, language, category)
        Bring_All_Languages(setLanguages)
        
        console.log(categories)
    }, [])

    return (
        
        <div
            className={ !displayCategories ? `categories hidden animate__animated animate__backOutUp ${stretch}` : `categories show animate__animated animate__backInDown ${stretch}`}
        >
            <select className="Select" onChange={(e) => changeLanguage(e.target.value)}>
                {
                    languages.length > 0 ?
                    
                        languages.map((language) => {
                            
                            return <option key={language} value={language}> {language.toUpperCase()} </option>
                        })
                        
                        : null
                }
            </select>
            {
                categories.length > 0 ?
                  
                    categories.map((categorie) => {

                        return <button className={ categorie } key={categorie} onClick={() => changeCategory(categorie)}> { categorie.toUpperCase() } </button>
                    })

                : null
            }

            <button className='Random' key='Random' onClick={() => changeCategory('')}>{'Random'.toUpperCase()}</button>
        </div>
    )
}

export default Categories
