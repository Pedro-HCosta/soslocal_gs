document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-sos");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const ocorrencia = document.getElementById("ocorrencia").value;
    const descricao = document.getElementById("descricao").value.trim();

    if (nome.length < 3) {
      alert("Por favor, insira um nome válido.");
      return;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert("CPF inválido. Insira apenas números (11 dígitos).");
      return;
    }

    if (!ocorrencia) {
      alert("Por favor, selecione uma ocorrência.");
      return;
    }

    if (descricao.length < 10) {
      alert("A descrição está muito curta. Informe mais detalhes.");
      return;
    }

    alert("Formulário enviado com sucesso!");
    window.location.href = "../html/envio.html";
  });
});
