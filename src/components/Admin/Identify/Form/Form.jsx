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
                        <input type="email" placeholder="Email" id="login-email"/>
                        <input type="password" placeholder="Password" id="login-password"/>
                        <input type="submit" value="Login"  id="login-submit"/>
                    </form>

                : null
            }
            {
                option === 'register' ?

                    <form>
                        <input type="email" placeholder="Email" id="register-email"/>
                        <input type="password" placeholder="Password" id="register-password"/>
                        <input type="password" placeholder="Confirm Password" id="register-confirm-password"/>
                        <input type="password" placeholder="Admin Reffer Code" id="register-admin-code"/>
                        <input type="submit" value="Register" id=""/>
                    </form>
                    
                : null
            }
        </div>
    )
}

export default Form
