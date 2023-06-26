console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded", (event)=>{
    console.log("DOM completamente cargado y procesado");
    const menuBtn= document.getElementById("menu");
    const nav= document.querySelector("header nav");
    const body=document.querySelector("body");

    menuBtn.addEventListener("click", (event) =>{
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");


    });
});

let nombre=document.getElementById('slogan');
/*console.log(titulo);
function retornaNombre(nombre){
    return 'Hola'+nombre;
}*/
let retornaNombre= nombre => 'Hola'+nombre;
nombre.innerHTML.=retornaNombre('dario');