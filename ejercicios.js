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
//Ejercicio 6
let contador = 0;
const valorContadorElement = document.getElementById("valor-contador");
const botonIncremento = document.getElementById("btn-increment");
const botonDecremento = document.getElementById("btn-decrement");
const mensajeElement = document.getElementById("mensaje");
function actualizarContador() {
    valorContadorElement.textContent = contador;
}
function incrementarContador() {
    contador++;
    actualizarContador();
    mensajeElement.textContent = '';
}
function decrementarContador() {
    if (contador > 0) {
        contador--;
        actualizarContador();
        mensajeElement.textContent = '';
    } else {
        mensajeElement.textContent = "El contador no puede ser menor que cero";
    }
}
botonIncremento.addEventListener("click", incrementarContador);
botonDecremento.addEventListener("click", decrementarContador);
document.addEventListener("DOMContentLoaded", actualizarContador);
//Ejercicio 7
const inputTexto = document.getElementById("nuevo-item-texto");
const btnAgregar = document.getElementById("btn-agregar");
const btnEliminarUltimo = document.getElementById("btn-eliminar-ultimo");
const listaDinamica = document.getElementById("lista-dinamica");
const mensajeEstado = document.getElementById("mensaje-estado");
function agregarElemento() {
    const texto = inputTexto.value.trim();
    if (texto === "") {
        mensajeEstado.textContent = "Ingresa un texto antes de agregar";
        return;
    }
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    listaDinamica.appendChild(nuevoItem);
    inputTexto.value = "";
    inputTexto.focus();
    mensajeEstado.textContent = `Elemento "${texto}" agregado`;
}
function eliminarUltimoElemento() {
    const items = listaDinamica.getElementsByTagName("li");
    if (items.length > 0) {
        const ultimoItem = listaDinamica.lastElementChild;
        const textoBorrado = ultimoItem.textContent;
        listaDinamica.removeChild(ultimoItem);
        mensajeEstado.textContent = `Elemento "${textoBorrado}" eliminado.`;
    } else {
        mensajeEstado.textContent = "La lista está vacía, no hay elementos para borrar";
    }
}
btnAgregar.addEventListener("click", agregarElemento);
inputTexto.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        agregarElemento();
    }
});
btnEliminarUltimo.addEventListener("click", eliminarUltimoElemento);