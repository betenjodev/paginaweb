
// Scroll up - boton de ir arriba

document.getElementById("boton-arriba").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 20)); // para obtener la animacion y la velocidad al subir
    }
}

buttonUp = document.getElementById("boton-arriba");

window.onscroll = function() {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 200){
        buttonUp.style.transform = "scale(1)";  // si es mayor que 200 nos muestre el boton
    }else if(scroll < 200){
        buttonUp.style.transform = "scale(0)";  // si es menor a 200 nos esconda el boton
    }

}