window.onload = function(){
    let enlance = document.getElementById("borrar");
    enlance.onclick = function(){
        borrarImagen("muestra");
    }
}

function borrarImagen(id){
    let nodo = document.getElementById(id);
    nodo.remove();
}