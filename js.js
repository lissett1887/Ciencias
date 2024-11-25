function saludo (){
    alert ("Bienvenido a mi pagina de ciencias!")
}

const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseleave", () => {
    imagen.src = "sustancias.jpeg";
})

imagen.addEventListener("mouseleave", () => {
    imagen.src = "productos.jpg";
})