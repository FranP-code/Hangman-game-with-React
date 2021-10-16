import React from "react"
import Bring_All_Categories from "./Firebase Querys/Bring All Categories"
import Bring_All_Languages from "./Firebase Querys/Bring All Languages"


const Categories = ({language, displayCategories}) => {

    const [categories, setCategories] = React.useState(false)
    const [languages, setLanguages] = React.useState(false)

    const [stretch, setStrech] = React.useState(false)

    React.useEffect (() => {

        Bring_All_Categories(setCategories, setStrech, language)
        Bring_All_Languages(setLanguages)
        
        console.log(categories)
    }, [])

    return (
        
        <div
            className={ !displayCategories ? `categories hidden animate__animated animate__backOutUp ${stretch}` : `categories show animate__animated animate__backInDown ${stretch}`}
        >
            <select className="Select">
                {
                    languages.length > 0 ?
                    
                        languages.map((language) => {
                            
                            return <option key={language} value={language}> {language} </option>
                        })
                        
                        : null
                }
            </select>
            {
                categories.length > 0 ?
                  
                    categories.map((categorie) => {

                        return <button className={ categorie } key={categorie}> { categorie.toUpperCase() } </button>
                    })

                : null
            }

            <button className='Random' key='Random'>{'Random'.toUpperCase()}</button>
        </div>
    )
}

export default Categories
