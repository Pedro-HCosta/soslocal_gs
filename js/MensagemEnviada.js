function enviarMensagem() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const mensagem = input.value.trim();

  if (mensagem !== "") {
    const novaMensagem = document.createElement("div");
    novaMensagem.className = "message sent";
    novaMensagem.textContent = mensagem;

    chatBox.appendChild(novaMensagem);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      enviarMensagem();
    }
  });
});
