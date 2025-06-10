function runUnitTests() {
  // Seus testes anteriores aqui...

  testar("UNIT - Cadastrar cliente com nome vazio", () => {
    clientes.length = 0;
    try {
      cadastrarCliente("", 22, "valid@example.com");
      throw new Error("Cadastro aceitou nome vazio");
    } catch (e) {
      if (e.message !== "Nome inválido") throw e;
    }
  });

  testar("UNIT - Cadastrar cliente com idade negativa", () => {
    clientes.length = 0;
    try {
      cadastrarCliente("Carlos", -5, "carlos@example.com");
      throw new Error("Cadastro aceitou idade negativa");
    } catch (e) {
      if (e.message !== "Idade inválida") throw e;
    }
  });

  testar("UNIT - Validar email com espaços em branco", () => {
    if (validarEmail("  teste@teste.com  ") === false) throw new Error("Email válido com espaços não aceito");
  });

  testar("UNIT - Calcular idade em dias para zero anos", () => {
    if (calcularIdadeEmDias(0) !== 0) throw new Error("Cálculo incorreto para idade zero");
  });

  testar("UNIT - Saudar cliente com nome vazio", () => {
    if (saudarCliente("") !== "Olá! Seja bem-vindo(a)!") throw new Error("Saudação incorreta para nome vazio");
  });

  testar("UNIT - Verificar lista de clientes após múltiplos cadastros", () => {
    clientes.length = 0;
    cadastrarCliente("Ana", 30, "ana@example.com");
    cadastrarCliente("Bruno", 40, "bruno@example.com");
    if (clientes.length !== 2) throw new Error("Quantidade de clientes incorreta após múltiplos cadastros");
  });
  testar("UNIT - Cadastrar cliente válido", () => {
    clientes.length = 0; 
    if (!cadastrarCliente("Ana", 30, "ana@example.com")) throw new Error("Falha no cadastro");
    if (clientes.length !== 1) throw new Error("Cliente não cadastrado");
  });

  testar("UNIT - Cadastrar cliente com email inválido", () => {
    try {
      cadastrarCliente("João", 25, "joao#email.com");
      throw new Error("Cadastro aceitou email inválido");
    } catch (e) {
      if (e.message !== "Email inválido") throw e;
    }
  });

  testar("UNIT - Limpar formulário", () => {
    const form = limparFormulario();
    if (form.nome !== "" || form.idade !== "" || form.email !== "") throw new Error("Formulário não limpo corretamente");
  });

  testar("UNIT - Validar email correto", () => {
    if (!validarEmail("teste@teste.com")) throw new Error("Email válido considerado inválido");
  });

  testar("UNIT - Validar email incorreto", () => {
    if (validarEmail("teste.com")) throw new Error("Email inválido considerado válido");
  });

  testar("UNIT - Calcular idade em dias", () => {
    if (calcularIdadeEmDias(10) !== 3650) throw new Error("Cálculo incorreto de idade em dias");
  });

  testar("UNIT - Saudar cliente", () => {
    if (saudarCliente("Maria") !== "Olá, Maria! Seja bem-vindo(a)!") throw new Error("Saudação incorreta");
  });
}
