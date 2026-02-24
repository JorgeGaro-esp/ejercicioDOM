window.onload =function(){
    let btn = document.getElementById("boton");
    btn.addEventListener('click',mover);
}

function mover(){
    let elem = document.getElementById("animar");
    let pos = 5;
    let id =setInterval(frame, 5);

    function frame(){
        
        if(pos==350){
            clearInterval(id);
        }else{
        pos++;
        elem.style.top = pos +"px";
        elem.style.left = pos +"px";
        }
    }   
}

/*Retos

1.Cambiar la velocidad
    Cambiar let id =setInterval(frame, 5); a por ejemplo let id =setInterval(frame, 2);
2.Cambiar la distancia
    Cambiar if(pos==350){ a por ejemplo if(pos==450){ 
3.Mover solo horizontal
    Deberiamos eliminar/comentar esta linea elem.style.left = pos +"px";
4.Cambiar color mientras se mueve
    Podemos añadir esta linea dentro de la funcion frame elem.style.backgroundColor = `rgb(${pos}, 0, ${350 - pos})`;
*/
