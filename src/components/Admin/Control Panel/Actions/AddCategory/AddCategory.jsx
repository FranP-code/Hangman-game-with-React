import React, {useState} from 'react'
import AddCategoryToFirebase from './Firebase Querys/AddCategoryToFirebase'
import Loading from '../../Loading/Loading'
import Messages from '../../Messages/Messages'

const AddCategory = () => {

    const [categorySpanish, setCategorySpanish] = useState('')
    const [categoryEnglish, setCategoryEnglish] = useState('')

    const [loading, setLoading] = useState(false)
    
    const [data, setData] = useState('') 

    const addCategorySubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        const result = await AddCategoryToFirebase(categoryEnglish, categorySpanish)
        setData(result)

        setCategoryEnglish('')
        setCategorySpanish('')

        setLoading(false)
    }

    return (
        <>
            {
                data !== '' ?
                    <Messages data={data} />        
                : null
            }
            {
                loading ?
                    <Loading />
                :
                <div className="action-form add-category">
                    <form
                        onSubmit={e => addCategorySubmit(e)}
                    >
                        
                        <input
                            type="text"
                            placeholder="Add the new category [English]"
                            required
                            onChange={e => setCategoryEnglish(e.target.value)}
                            value={categoryEnglish}
                        />
                        <input
                            type="text"
                            placeholder="Add the new category [Spanish]"
                            required
                            onChange={e => setCategorySpanish(e.target.value)}
                            value={categorySpanish}
                        />
                        <input type="submit"/>
                    </form>
                </div>
            }
        </>
    )
}

export default AddCategory
