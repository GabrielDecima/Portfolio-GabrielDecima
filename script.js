var typed = new Typed(".multiple-text",{
    strings:["Frontend"," Developer","Html","Css","React js"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})




const hamburguesa = document.getElementById("menu-home");
const menuHamburguesa = document.getElementById("navegador");

function cambiarEstado(){
    if(menuHamburguesa.classList.contains('activate-menu')){
        menuHamburguesa.classList.remove('activate-menu');
    } else {
        menuHamburguesa.classList.add('activate-menu');
    }
  }


hamburguesa.addEventListener("click", cambiarEstado)
