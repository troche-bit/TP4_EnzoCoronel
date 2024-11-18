// Manejo de edad del usuario
const ageInput = document.getElementById("user-age");
const ageSubmitButton = document.getElementById("submit-age");
const ageResponse = document.getElementById("age-response");
const ageMessage = document.getElementById("age-message");

ageSubmitButton.addEventListener("click", () => {
    const userAge = parseInt(ageInput.value);

    if (!isNaN(userAge)) {
        ageResponse.style.display = "block";

        if (userAge > 20) {
            ageMessage.textContent = "Eres mayor de 20 años.";
        } else if (userAge == 20){
            ageMessage.textContent = "Tienes 20 años.";
        } else {
            ageMessage.textContent = "Eres menor de 20 años.";
        }
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
});

// Interacciones con imágenes (cambio al pasar el mouse)
const images = document.querySelectorAll(".animated-image");

images.forEach((image, index) => {
    image.addEventListener("mouseenter", () => {
        image.src = `imagenes/hover-image${index + 1}.jpg`; // Cambiar al pasar el mouse
    });
    image.addEventListener("mouseleave", () => {
        image.src = `imagenes/image${index + 1}.jpg`; // Volver a la imagen original
    });
});
