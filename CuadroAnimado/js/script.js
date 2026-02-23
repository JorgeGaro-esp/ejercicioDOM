window.onload =function(){
    let btn = document.getElementById("boton");
    btn.addEventListener('click',mover);
}

function mover(){
    let elem = document.getElementById("animar");
    let pos = 0;
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