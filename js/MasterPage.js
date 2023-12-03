function cambiarPropiedad() {
    var elemento = document.getElementById("toggleMenu");
    var element = document.getElementsByTagName("body");
    // Verifica si la propiedad 'width' actual es '100px'
    if (elemento.style.visibility === "hidden") {
        // Cambia la propiedad 'width' a '200px'
        elemento.style.visibility = "visible";
    } else {
        // Si no es '100px', vuelve a establecerla como '100px'
        elemento.style.visibility = "hidden";
    }
}

function ocultarElemento() {
    var elementoOculto = document.getElementById("toggleMenu");

    if (window.innerWidth >= 1300) {
      elementoOculto.style.visibility = "hidden"; // Ocultar el elemento
    }
  }

window.onload = ocultarElemento;

// Llamar a la función al cambiar el tamaño de la ventana
window.onresize = ocultarElemento;