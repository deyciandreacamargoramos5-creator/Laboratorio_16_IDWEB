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
//Ejercicio 8
const formulario = document.getElementById("formulario-contacto");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
formulario.addEventListener("submit", function(e) {
    e.preventDefault(); 
    validarFormulario();
});
function validarFormulario() {
    let esValido = true;
    if (inputNombre.value.trim() === " ") {
        mostrarError(inputNombre, "El campo Nombre es obligatorio.");
        esValido = false;
    } else {
        quitarError(inputNombre);
    }
    if (inputCorreo.value.trim() === " ") {
        mostrarError(inputCorreo, "El campo Correo es obligatorio");
        esValido = false;
    } else {
        quitarError(inputCorreo);
    }
    if (esValido) {
        alert("Formulario enviado");
        formulario.reset();
    }
}
function mostrarError(inputElement, mensaje) {
    const parent = inputElement.parentElement;
    let spanError = parent.querySelector(".error-mensaje");
    if (!spanError) {
        spanError = document.createElement("span");
        spanError.classList.add("error-mensaje");
        spanError.style.color = "red";
        parent.appendChild(spanError);
    }   
    spanError.textContent = mensaje;
}
function quitarError(inputElement) {
    const parent = inputElement.parentElement;
    const spanError = parent.querySelector(".error-mensaje");
    
    if (spanError) {
        parent.removeChild(spanError);
    }
}
//Ejercicio 9
const imagenPrincipal = document.getElementById('imagen-principal');
const miniaturas = document.getElementById('miniaturas');
miniaturas.addEventListener("click", function(e) {
    if (e.target.classList.contains('miniatura')) {
        const miniaturaClicada = e.target;
        const nuevaSrc = miniaturaClicada.getAttribute("data-full-src");
        if (nuevaSrc) {
            imagenPrincipal.setAttribute("src", nuevaSrc);
            imagenPrincipal.setAttribute("alt", miniaturaClicada.getAttribute("alt").replace("Miniatura", "Imagen Principal"));
        }
    }
});
//Ejercicio 10
const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Monitor", precio: 1200 },
    { nombre: "Teclado Mecánico", precio: 250 }
];
const btnGenerar = document.getElementById("btn-generar-tabla");
const contenedorTabla = document.getElementById("contenedor-tabla");
function generarTabla() {
    contenedorTabla.innerHTML = "";
    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    tabla.style.width = "50%";
    tabla.style.border = "1px solid black";
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const encabezadoFila = document.createElement("tr");
    const thNombre = document.createElement("th");
    thNombre.textContent = "Nombre";
    thNombre.style.border = "1px solid black";
    thNombre.style.padding = "8px";
    const thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    thPrecio.style.border = "1px solid black";
    thPrecio.style.padding = "8px";
    encabezadoFila.appendChild(thNombre);
    encabezadoFila.appendChild(thPrecio);
    thead.appendChild(encabezadoFila);
    productos.forEach(producto => {
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        celdaNombre.style.border = "1px solid black";
        celdaNombre.style.padding = "8px";
        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = "$" + producto.precio.toFixed(2);
        celdaPrecio.style.border = "1px solid black";
        celdaPrecio.style.padding = "8px";
        celdaPrecio.style.textAlign = "right";
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        tbody.appendChild(fila);
    });
    tabla.appendChild(thead);
    tabla.appendChild(tbody);   
    contenedorTabla.appendChild(tabla);
}
btnGenerar.addEventListener("click", generarTabla);
//Ejercicio 11
const listaDelegada = document.getElementById("lista-delegada");
function manejarClick(e) {
    if (e.target.tagName === "LI") {
        const elementoAEliminar = e.target;
        
        elementoAEliminar.parentElement.removeChild(elementoAEliminar);
    }
}
listaDelegada.addEventListener("click", manejarClick);
//Ejercicio 12
const cuadrado = document.getElementById("cuadrado");
const btnMover = document.getElementById("btn-mover");
const btnReiniciar = document.getElementById("btn-reiniciar");
function iniciarMovimiento() {
    cuadrado.classList.add("mover");
}
function reiniciarPosicion() {
    cuadrado.classList.remove("mover");
}
btnMover.addEventListener("click", iniciarMovimiento);
btnReiniciar.addEventListener("click", reiniciarPosicion);
//Ejercicio 13
let nextId = 1;
const usuarios = [];
const formulario1 = document.getElementById("formulario1"); 
const tablaBody = document.querySelector("#tabla-usuarios tbody");
formulario1.addEventListener("submit", function(e) { 
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    if (nombre && !isNaN(edad)) {
        crearUsuario(nombre, edad);
        formulario1.reset(); 
    }
});
tablaBody.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-eliminar")) {
        const id = parseInt(e.target.closest("tr").dataset.id);
        eliminarUsuario(id);
    }
});
function crearUsuario(nombre, edad) {
    const nuevoUsuario = {
        id: nextId++,
        nombre: nombre,
        edad: edad
    };
    usuarios.push(nuevoUsuario);
    renderizarTabla(); }
function eliminarUsuario(id) {
    const index = usuarios.findIndex(user => user.id === id);
    if (index !== -1) {
        usuarios.splice(index, 1);
        renderizarTabla();
    } }
function renderizarTabla() {
    tablaBody.innerHTML = "";
    usuarios.forEach(user => {
        const fila = document.createElement("tr");
        fila.dataset.id = user.id;
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = user.nombre;
        const celdaEdad = document.createElement("td");
        celdaEdad.textContent = user.edad;
        const celdaAccion = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        celdaAccion.appendChild(btnEliminar);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaAccion);
        tablaBody.appendChild(fila);
    });
}
//Ejercicio 14
const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};
const personaJSON = JSON.stringify(persona);
console.log("Objeto JS (formato nativo):");
console.log(persona);

console.log("Cadena JSON (string):");
console.log(personaJSON);
//Ejercicio 15
const cadenaJSON = '{"nombre": "Carlos", "trabajo": "Desarrollador", "salario": 50000}';
const contenedorNombre = document.getElementById("nombre-empleado");
const objetoEmpleado = JSON.parse(cadenaJSON); 
contenedorNombre.textContent = objetoEmpleado.nombre; 
//Ejercicio 16
const productos1=[{nombre:"Tablet",precio:800},{nombre:"Auriculares",precio:150},{nombre:"Cámara",precio:1500}];
const contenedorLista=document.getElementById("contenedor-lista");
const productosJSON=JSON.stringify(productos1);
const productosObjeto=JSON.parse(productosJSON);
const lista=document.createElement("ul");
lista.style.listStyleType="square";
lista.style.paddingLeft="20px";
productosObjeto.forEach(producto=>{
    const item=document.createElement("li");
    item.textContent=producto.nombre;
    item.style.marginBottom="5px";
    item.style.color="darkgreen";
    lista.appendChild(item);
});
contenedorLista.appendChild(lista);
//Ejercicio 17
const userData={nombre:"Elena Gómez",correo:"elena.gomez@empresa.com",rol:"Administradora"};
const key="datosUsuario";
const mensajeEstado1=document.getElementById("mensaje-estado");
const userDataJSON=JSON.stringify(userData);
localStorage.setItem(key,userDataJSON);
mensajeEstado1.textContent="Datos guardados en localStorage.";
const storedDataJSON=localStorage.getItem(key);
if(storedDataJSON){
    const storedUser=JSON.parse(storedDataJSON);
    document.getElementById("nombre-ls").textContent=storedUser.nombre;
    document.getElementById("correo-ls").textContent=storedUser.correo;
    document.getElementById("rol-ls").textContent=storedUser.rol;
    mensajeEstado.textContent+=" Datos recuperados y mostrados.";
}else{
    mensajeEstado1.textContent="No se encontraron datos en localStorage.";
}