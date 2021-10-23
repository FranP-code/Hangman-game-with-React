import React from 'react'

const Messages = ({data}) => {

    const [sucess, setSucess] = React.useState('')
    const [message, setMessage] = React.useState('')

    React.useEffect(() => {

        if (data === '') {

            setSucess(true)
            setMessage('TEST')
        }
        
        else {
   
            setSucess(data['sucess'])
            setMessage(data['message'])
        }
            
    }, [])

    return (
        <>
            {

                sucess ?
                    <div className="message animate__animated animate__slideInDown sucess">
                        {message}
                    </div>
                :
                    <div className="message animate__animated animate__slideInDown error">
                        {message}
                    </div>
            }
        </>
    )
}

export default Messages
