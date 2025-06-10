const clientes = [];

function cadastrarCliente(nome, idade, email) {
  if (!validarEmail(email)) throw new Error("Email inválido");
  clientes.push({ nome, idade, email });
  return true;
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function limparFormulario() {
  return { nome: "", idade: "", email: "" };
}

function calcularIdadeEmDias(idade) {
  return idade * 365;
}

function saudarCliente(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
}