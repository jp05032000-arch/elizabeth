
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const datos = new FormData(formulario);

    const horas = datos.get("horas");
    const uso = datos.get("uso");
    const estudio = datos.get("estudio");
    const exceso = datos.get("exceso");
    const descanso = datos.get("descanso");
    const reducir = datos.get("reducir");

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h2>¡Gracias por participar! 🎉</h2>

        <p><strong>Horas de uso:</strong> ${horas}</p>

        <p><strong>Uso principal:</strong> ${uso}</p>

        <p><strong>¿Utilizas el celular al estudiar?</strong> ${estudio}</p>

        <p><strong>¿Lo utilizas demasiado?</strong> ${exceso}</p>

        <p><strong>¿Afecta tu descanso?</strong> ${descanso}</p>

        <p><strong>¿Reducirías su uso?</strong> ${reducir}</p>

        <h3>¡Gracias por responder nuestra encuesta! 💙</h3>

        <p>Recuerda utilizar el teléfono celular
        de manera responsable.</p>
    `;

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

formulario.addEventListener("reset", function() {
    resultado.style.display = "none";
    resultado.innerHTML = "";
});
