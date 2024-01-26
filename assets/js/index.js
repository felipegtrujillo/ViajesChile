/* Tool tip para seccion Quienes somos */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Espera a que el DOM esté listo
    $(document).ready(function() {

        // Agrega un evento clic al título "Quienes Somos"
        $("#TituloQuienesSomos").on("click", function() {
          alert("Hola ! Bienvenid@ a Viajes Chile !");
        });

   });