window.onload = function() {
    const bombilla = document.getElementById("bombilla");

    bombilla.addEventListener("click", function() {
        if (bombilla.src.includes("img/pic_bulboff.gif")) {
            bombilla.src = "img/pic_bulbon.gif";
        } else {
            bombilla.src = "img/pic_bulboff.gif";
        }
    });
};
