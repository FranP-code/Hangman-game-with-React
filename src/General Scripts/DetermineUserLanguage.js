const DetermineUserLanguage = (setLanguage) => {

    if (!localStorage.getItem('languageDetermined')) {

        
        console.log(navigator.language)
        
        if (navigator.language === 'es') {
            setLanguage('spanish')
        }
        
        if (navigator.language === 'en' || navigator.language === 'en-US') {
            setLanguage('english')
        }

        localStorage.setItem('languageDetermined', 'true')
    }
      
}

export default DetermineUserLanguage
