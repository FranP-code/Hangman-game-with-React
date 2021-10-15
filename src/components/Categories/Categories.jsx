import React from "react"
import Bring_All_Categories from "./Firebase Querys/Bring All Categories"


const Categories = ({hidden}) => {

    const [categories, setCategories] = React.useState([])

    React.useEffect (() => {

        Bring_All_Categories(setCategories)
        
        console.log(categories)
    }, [])

    return (
        
        <div
            className={ hidden ? 'categories' : 'categories show'}
        >
            {
                categories.length > 0 ?
                  
                    categories.map((categorie) => (

                        <button key={categorie}> { categorie } </button>
                    ))

                : null
            }
        </div>
    )
}

export default Categories
