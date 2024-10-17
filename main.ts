//tsc --esModuleInterop main.ts
//node main.js



import PromptSync from "prompt-sync";
import { Consulta } from "./classes/Consulta";
import { Medico } from "./classes/Medico";
import { Paciente } from "./classes/Paciente";
import { Receita } from "./classes/Receita";
import "prompt-sync";

const prompt=PromptSync();

// Cria um médico
const medico = new Medico("João Silva", "123456", "Cardiologia");

// Solicita o código de autenticação ao médico
const codigoAutenticacao = prompt("Digite o código de autenticação:");

// Valida o código de autenticação (considerando o tratamento de erros)
if (codigoAutenticacao !== null) { // Verifica se o código foi digitado
  try {
    medico.validarAutentificacao(codigoAutenticacao);
    console.log("Autenticação bem-sucedida!");
  } catch (error) {
    console.error("Erro na autenticação:", error);
  }
} else {
  console.error("Erro: código de autenticação não foi digitado.");
}

// Cria um paciente
const paciente = new Paciente("Maria Santos", 35);

// Cria uma consulta (com tratamento de erros)
let consulta: Consulta | undefined;
try {
  consulta = new Consulta(medico, new Date("2024-03-15"), paciente);
  console.log("Consulta criada com sucesso!");
} catch (error) {
  console.error("Erro ao criar consulta:", error);
}

// Cria uma receita (com tratamento de erros)
let receita: Receita | undefined;
try {
  if (consulta) {
    receita = new Receita("Aspirina 100mg, 1 comprimido por dia", consulta, new Date());
    console.log("Receita criada com sucesso!");
  } else {
    console.error("Não foi possível criar a receita: a consulta não foi criada.");
  }
} catch (error) {
  console.error("Erro ao criar receita:", error);
}

// Imprime informações do médico
console.log("\nInformações do Médico:");
console.log(`Nome: ${medico.nome}`);
console.log(`Credencial: ${medico.credencial}`);
console.log(`Especialidade: ${medico.especialidade}`);

// Imprime informações do paciente
console.log("\nInformações do Paciente:");
console.log(`Nome: ${paciente.nome}`);
console.log(`Idade: ${paciente.idade}`);

// Imprime informações da consulta (se criada)
if (consulta) {
  console.log("\nInformações da Consulta:");
  console.log(`Data: ${consulta.dataC.toLocaleDateString()}`);
  console.log(`Médico: ${consulta.medico.nome}`);
  console.log(`Paciente: ${consulta.paciente.nome}`);
}

// Imprime informações da receita (se criada)
if (receita) {
  console.log("\nInformações da Receita:");
  console.log(`Data: ${receita.dataReceita.toLocaleDateString()}`);
  console.log(`Medicamentos: ${receita.medicamentos}`);

  // Verifica se a data da receita é a mesma da consulta
  try {
    receita.verificarData();
  } catch (error) {
    console.error(error);
  }
}