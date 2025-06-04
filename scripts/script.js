function Menu(){
  const menuLateral = document.querySelector('.menu-lateral')
  const menuIcon = document.querySelector('.menu-mobile')
    menuLateral.classList.add('active')
    
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
          menuLateral.classList.toggle('active')
        })  
    }
   
}