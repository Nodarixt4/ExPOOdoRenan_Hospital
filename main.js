"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Consulta_1 = require("./classes/Consulta");
var Medico_1 = require("./classes/Medico");
var Paciente_1 = require("./classes/Paciente");
var Receita_1 = require("./classes/Receita");
// Cria um médico
var medico = new Medico_1.Medico("João Silva", "123456", "Cardiologia");
// Gera um código de autenticação para o médico
medico.gerarCodigoAutenticacao();
// Cria um paciente
var paciente = new Paciente_1.Paciente("Maria Santos", 35);
// Cria uma consulta (com tratamento de erros)
var consulta; // Declara a variável 'consulta' fora do try
try {
    consulta = new Consulta_1.Consulta(medico, new Date("2024-03-15"), paciente);
    console.log("Consulta criada com sucesso!");
}
catch (error) {
    console.error("Erro ao criar consulta:", error);
}
// Cria uma receita (com tratamento de erros)
var receita; // Declara a variável 'receita' fora do try
try {
    if (consulta) { // Verifica se 'consulta' foi criada com sucesso
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
        receita.verificarData(); // Corrigido o nome do método para 'isValid'
    }
    catch (error) {
        console.error(error);
    }
}
