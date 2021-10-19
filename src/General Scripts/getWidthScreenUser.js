const getWidthScreenUser = (setMobileUser) => {

    if (window.innerWidth <= 768) {
        setMobileUser(true)
    }

    else {
        setMobileUser(false)
    }
}

export default getWidthScreenUser
