window.onload = function() {

    //Llamamos a la función obtenerHora cada 500 milisegundos (medio segundo). Esto
    //es lo que permite que el reloj se actualice
    let t = setInterval(obtenerHora, 500);
}

function obtenerHora() {
    let fecha = new Date(); //Creamos un objeto de tipo fecha

    //Extraemos la hora de la variable donde hemos guardado la fecha
    let h = fecha.getHours();
    //Si la hora no tiene dos dígitos, le añadiremos un cero delante
    if (h < 10) {
        h = "0" + h;
    }

    //Extraemos los minutos de la variable donde hemos guardado la fecha
    let m = fecha.getMinutes();
    //Si los minutos no tienen dos dígitos, le añadiremos un cero delante
    if (m < 10) {
        m = "0" + m;
    }

    //Extraemos los segundos de la variable donde hemos guardado la fecha
    let s = fecha.getSeconds();
    //Si los segundos no tienen dos dígitos, le añadiremos un cero delante
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById("reloj").innerHTML = h + ":" + m + ":" + s;
}

/*Retos

function obtenerHora() {

let fecha = new Date();

let h = formatear(fecha.getHours());
let m = formatear(fecha.getMinutes());
let s = formatear(fecha.getSeconds());

document.getElementById("reloj").innerHTML = h + ":" + m + ":" + s;
}

function formatear(valor) { 
return valor < 10 ? "0" + valor : valor; 
}

*/
