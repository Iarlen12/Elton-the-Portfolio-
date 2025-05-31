function Menu(){
  const menuLateral = document.querySelector('.menu-lateral')
  const close = document.getElementById('close')
    menuLateral.classList.add('active')
    
    if (close) {
        close.addEventListener('click', () => {
          menuLateral.classList.remove('active')
        })  
    }
   
}