export const RecoveryCurrentCategory = (setCategory) => {
    
    if (localStorage.getItem('category')) {

        setCategory(localStorage.getItem('category'))
        localStorage.removeItem('category')
      }
}
