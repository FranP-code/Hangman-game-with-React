import React from "react"

const Defeat = ({language}) => {

    const [text, setText] = React.useState('')

    React.useEffect(() => {

        if (language === 'english') {

            setText('DEFEAT')
        }

        if (language === 'spanish') {

            setText('PERDISTE')
        }
        
    }, [])

    return (
        <div className="defeat animate__animated animate__backInDown">
            <h1>{text}</h1>
        </div>
    )
}

export default Defeat
