
// Seleccionar los elementos de la página
const botonSaludo = document.getElementById("botonSaludo");
const mensaje = document.getElementById("mensaje");

// Ejecutar la acción al hacer clic
botonSaludo.addEventListener("click", function () {
    mensaje.textContent =
        "¡Hola! Gracias por visitar ColabLanding.";

    alert("¡Bienvenido a ColabLanding!");
});
