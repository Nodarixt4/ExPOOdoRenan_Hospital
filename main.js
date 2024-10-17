"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Consulta_1 = require("./classes/Consulta");
var Medico_1 = require("./classes/Medico");
var Paciente_1 = require("./classes/Paciente");
var Receita_1 = require("./classes/Receita");
require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
// Cria um médico
var medico = new Medico_1.Medico("João Silva", "123456", "Cardiologia");
// Solicita o código de autenticação ao médico
var codigoAutenticacao = prompt("Digite o código de autenticação:");
// Valida o código de autenticação (considerando o tratamento de erros)
if (codigoAutenticacao !== null) { // Verifica se o código foi digitado
    try {
        medico.validarAutentificacao(codigoAutenticacao);
        console.log("Autenticação bem-sucedida!");
    }
    catch (error) {
        console.error("Erro na autenticação:", error);
    }
}
else {
    console.error("Erro: código de autenticação não foi digitado.");
}
// Cria um paciente
var paciente = new Paciente_1.Paciente("Maria Santos", 35);
// Cria uma consulta (com tratamento de erros)
var consulta;
try {
    consulta = new Consulta_1.Consulta(medico, new Date("2024-03-15"), paciente);
    console.log("Consulta criada com sucesso!");
}
catch (error) {
    console.error("Erro ao criar consulta:", error);
}
// Cria uma receita (com tratamento de erros)
var receita;
try {
    if (consulta) {
        receita = new Receita_1.Receita("Aspirina 100mg, 1 comprimido por dia", consulta, new Date());
        console.log("Receita criada com sucesso!");
    }
    else {
        console.error("Não foi possível criar a receita: a consulta não foi criada.");
    }
}
catch (error) {
    console.error("Erro ao criar receita:", error);
}
// Imprime informações do médico
console.log("\nInformações do Médico:");
console.log("Nome: ".concat(medico.nome));
console.log("Credencial: ".concat(medico.credencial));
console.log("Especialidade: ".concat(medico.especialidade));
// Imprime informações do paciente
console.log("\nInformações do Paciente:");
console.log("Nome: ".concat(paciente.nome));
console.log("Idade: ".concat(paciente.idade));
// Imprime informações da consulta (se criada)
if (consulta) {
    console.log("\nInformações da Consulta:");
    console.log("Data: ".concat(consulta.dataC.toLocaleDateString()));
    console.log("M\u00E9dico: ".concat(consulta.medico.nome));
    console.log("Paciente: ".concat(consulta.paciente.nome));
}
// Imprime informações da receita (se criada)
if (receita) {
    console.log("\nInformações da Receita:");
    console.log("Data: ".concat(receita.dataReceita.toLocaleDateString()));
    console.log("Medicamentos: ".concat(receita.medicamentos));
    // Verifica se a data da receita é a mesma da consulta
    try {
        receita.verificarData(); // Utiliza o método 'isValid' 
    }
    catch (error) {
        console.error(error);
    }
}
