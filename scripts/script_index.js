// Obtener elementos del DOM
const userNameInput = document.getElementById("user-name");
const submitNameButton = document.getElementById("submit-name");
const personalizedWelcome = document.getElementById("personalized-welcome");
const userDisplay = document.getElementById("user-display");
const welcomeMessage = document.getElementById("welcome-message");

// Manejar el clic en el botón de enviar nombre
submitNameButton.addEventListener("click", () => {
    const userName = userNameInput.value.trim();

    if (userName) {
        // Mostrar mensaje personalizado
        userDisplay.textContent = userName;
        personalizedWelcome.style.display = "block";

        // Cambiar el mensaje de bienvenida
        welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido a nuestra página`;
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});
