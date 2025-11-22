//Ejercicio 3
const parrafo3 = document.getElementById('parrafo-ej3');
const boton3 = document.getElementById('boton-ej3');

boton3.addEventListener('click', function() {
    parrafo3.textContent = 'Texto cambiado';
});
//Ejercicio 4
const parrafo4 = document.getElementById('parrafo-ej4');
const boton4 = document.getElementById('boton-ej4');

let textoAlternado = false; 

boton4.addEventListener('click', function() {
    if (textoAlternado) {
        parrafo4.textContent = 'Texto original';
    } else {
        parrafo4.textContent = 'Texto cambiado';
    }
    textoAlternado = !textoAlternado;
});
//Ejercicio 5
const boton5 = document.getElementById('boton-ej5');

boton5.addEventListener('click', function() {
    document.body.classList.toggle('oscuro');
});

