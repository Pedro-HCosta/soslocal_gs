document.addEventListener("DOMContentLoaded", function () {
  const perguntas = document.querySelectorAll("h3");

  perguntas.forEach(pergunta => {
    const resposta = pergunta.nextElementSibling;

    // Oculta inicialmente a resposta
    resposta.style.display = "none";

    // Aplica o efeito de toggle (abre/fecha) ao clicar na pergunta
    pergunta.style.cursor = "pointer";
    pergunta.addEventListener("click", () => {
      const visivel = resposta.style.display === "block";
      resposta.style.display = visivel ? "none" : "block";
    });
  });
});
