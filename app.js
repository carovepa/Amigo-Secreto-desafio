// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let amigoAgregado = document.getElementById('amigo').value;
    //verificar txto ingresado
    if (amigoAgregado=== '') {
        alert('Por favor ingrese un nombre válido');
        return;
    }
    if (listaAmigos.includes(amigoAgregado)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    // agregar a lista 
    listaAmigos.push(amigoAgregado)
    //limpiar caja
    document.getElementById('amigo').value = '';

    //nueva lista
    actualizarLista();
 }
 function actualizarLista() {
    let listaElemento = document.getElementById('listaAmigos');
    // Limpiar lista
    listaElemento.innerHTML = ''; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaElemento.appendChild(li);
    };
}

function sortearAmigo() {
    //verificar que las lista tenga amigos
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega al menos dos amigos para sortear.');
        return;
    }
    if (listaAmigos.length === 1) {
        alert('Necesitas al menos 2 amigos para sortear.');
        return;
    }

    // indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    //amigo sorteado 
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // mostrar amigo
    document.getElementById('resultado').innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}