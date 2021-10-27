import React from 'react'

const Footer = (props) => {
    return (
        <footer className={props.darkMode ? 'made-with-love dark-mode-component' : 'made-with-love'}>
            {/* <p>
                Made with 💓 by <a href="http://www.franp.xyz">Francisco Pessano</a>.
            </p> */}
            <a href="/credits-page">Credits</a>
        </footer>
    )
}

export default Footer