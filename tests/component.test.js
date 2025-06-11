function runComponentTests() {
  //Vai testar se os formularios estao aparecendo na tela!
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("formulario");
    if (!form) throw new Error("Formulário não encontrado");
  });
// Vai testar se os imputs estao rescebendo os valores corretamente!
  testar("COMPONENT - Inputs devem receber valores corretamente", () => {
    const inputNome = document.getElementById("nome");
    const inputIdade = document.getElementById("idade");
    const inputEmail = document.getElementById("email");

    inputNome.value = "João";
    inputIdade.value = "30";
    inputEmail.value = "joao@email.com";

    if (
      inputNome.value !== "João" ||
      inputIdade.value !== "30" ||
      inputEmail.value !== "joao@email.com"
    ) {
      throw new Error("Inputs não aceitaram valores corretamente");
    }
  });
// Vai testar se os componentes estão lançando os submits!
  testar("COMPONENT - Formulário dispara evento de submit", () => {
    const form = document.getElementById("formulario");
    let chamado = false;

    const listener = (e) => {
      chamado = true;
      e.preventDefault();
      form.removeEventListener("submit", listener);
    };

    form.addEventListener("submit", listener);
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    if (!chamado) throw new Error("Evento de submit não foi chamado");
  });
// Vai testar se os botões estao presentes na tela!
  testar("COMPONENT - Botões devem existir na página", () => {
    const btnLimpar = document.getElementById("btnLimpar");
    const btnValidarEmail = document.getElementById("btnValidarEmail");
    const btnIdadeDias = document.getElementById("btnIdadeDias");
    const btnSaudacao = document.getElementById("btnSaudacao");

    if (!btnLimpar) throw new Error("Botão Limpar não encontrado");
    if (!btnValidarEmail) throw new Error("Botão Validar Email não encontrado");
    if (!btnIdadeDias) throw new Error("Botão Calcular Idade em Dias não encontrado");
    if (!btnSaudacao) throw new Error("Botão Saudação não encontrado");
  });
}