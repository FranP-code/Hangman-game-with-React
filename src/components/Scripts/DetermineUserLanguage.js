const DetermineUserLanguage = (setLanguage) => {

    console.log(navigator.language)

    if (navigator.language === 'es') {
        setLanguage('spanish')
    }

    if (navigator.language === 'en' || navigator.language === 'en-US') {
        setLanguage('english')
    }
      
}

export default DetermineUserLanguage
