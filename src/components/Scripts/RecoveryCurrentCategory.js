export const RecoveryCurrentCategory = (setCategory) => {
    
    if (localStorage.getItem('category')) {

      if (localStorage.getItem('category') === 'false') {

        setCategory(false)
      }

        setCategory(localStorage.getItem('category'))
        localStorage.removeItem('category')
      }
}
