import React from 'react'

const Form = () => {

    const [option, setOption] = React.useState('login')

    return (
        <div className="form-container">
            <nav className="options-container">
                <div className={option === 'login' ? "active login" : 'login'} onClick={() => setOption('login')}>
                    LOGIN
                </div>
                <div className={option === 'register' ? "active register" : 'register'} onClick={() => setOption('register')}>
                    REGISTER
                </div>
            </nav>

            {
                option === 'login' ?

                    <form>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Login" />
                    </form>

                : //saasasasasas

                    <form>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password" value=""/>
                        <input type="password" placeholder="Admin Reffer Code"/>
                        <input type="submit" value="Register"/>
                    </form>
            }
        </div>
    )
}

export default Form
