window.onload = function(){
    crearContenido();
}

function crearContenido(){
    let nodoTitle = document.createElement("title");
    let txtTitle = document.createTextNode("Mi pagina dinamica");
    nodoTitle.appendChild(txtTitle);
    document.head.appendChild(nodoTitle);

    //Crear la cabecera h1
    let titularH1 = document.createElement("h1");
    let txtTitular=document.createTextNode("Pagina creada on line");
    titularH1.appendChild(txtTitular);
    document.body.appendChild(titularH1);
    
    //Crear el parrafo
    let parrafoCur = document.createElement("p");
    parrafoCur.setAttribute("style","font-style: italic");
    let txtParrafo = document.createTextNode("Ese es el contenido de mi parrafo. Esta puesto en cursiva");
    parrafoCur.appendChild(txtParrafo);
    document.body.appendChild(parrafoCur)

}