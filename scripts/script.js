function Menu(){
  const menuLateral = document.querySelector('.menu-lateral')
  const menuIcon = document.querySelector('.menu-mobile')
    
    if ( menuIcon) {
        menuIcon.addEventListener('click', () => {
          menuLateral.classList.toggle('active')
        })  
    }
   
}
window.addEventListener('DOMContentLoaded', Menu);