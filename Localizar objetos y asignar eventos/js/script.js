window.onload = function(){
    //Obtener el div destino
    const destino = document.getElementById('destino');

    //Obtener los botones
    const botonRojo = document.getElementById('rojo');
    const botonAzul = document.getElementById('azul');

    //Asignar evento al boton rojo
    botonRojo.addEventListener('click',function(){
        destino.style.backgroundColor = 'red'
    })

    //Asignar evento al boton azul
    botonAzul.addEventListener('click',function(){
        destino.style.backgroundColor = 'blue'
    })
}