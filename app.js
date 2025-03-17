//Crear un array para almacenar los nombres de los amigos.
let amigos = [];
//console.log(amigos.length);

//Implementa una función para agregar amigos.
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); //Captura el valor del campo de entrada:inputAmigo.
    let nombreAmigo = inputAmigo.value.trim();

    if(!inputAmigo.value) {
        alert("Por favor, ingresa un nombre."); // valida que el campo no esté vacío.
        return;}

        if (/^\d/.test(nombreAmigo)) {
            alert(`"${nombreAmigo}"no es un nombre válido.`); // valida que no se puedan ingresar números   
            return;}

       
     for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nombreAmigo.toLowerCase()) {
            alert(`"${nombreAmigo}" ya está participando.`); // valida que no se puedan ingresar nombres repetidos.
            return;}

        }

        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreAmigo)) { 
            alert(`"${nombreAmigo}" no es un nombre válido.`); // valida que no se puedan ingresar caracteres especiales.
            return;
        }
        
            amigos.push(nombreAmigo); // Agrega los nombres al array.
            inputAmigo.value = ""; // Limpia el campo de entrada.
            inputAmigo.focus();
            actualizarListaAmigos();
            
}

//Implementa una función para actualizar la lista de amigos.
function actualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); // Obtiene la lista
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) { 
        let item = document.createElement("li"); // Crea el <li>
        item.textContent = amigos[i];  
        
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌"; 
        botonEliminar.style.marginLeft = "8px"; 
        botonEliminar.onclick = function () {
            eliminarAmigo(i); // Llama a la función para eliminar
        };

        item.appendChild(botonEliminar); // Agrega el botón al <li>
        listaAmigos.appendChild(item); // Agrega el <li> a la lista
    }
}
    function eliminarAmigo(index) {
        let confirmacion = confirm(`¿Estás seguro/a de querer eliminar a "${amigos[index]}"?`);
    
        if (confirmacion) { 
            amigos.splice(index, 1); // Elimina el amigo si el usuario lo confirma.
            actualizarListaAmigos(); // Vuelve a mostrar la lista actualizada
        }
  
             
}

function sortearAmigo() {
        if(!amigos.length) {
            alert("No hay amigos para sortear."); // Valida haya amigos disponibles para sortear.
            return;
        }
      let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]; // Sortea un amigo secreto
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = `El Amigo Secreto es: ${amigoSecreto}🎉`; // Muestra el  ganador del juego.      
       
}
    function reiniciarJuego() {
    amigos = []; // Vacía el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista en el HTML.
    document.getElementById("resultado").innerHTML = ""; // Borra el resultado del sorteo.
    alert("El sorteo se ha reiniciado.");

}






