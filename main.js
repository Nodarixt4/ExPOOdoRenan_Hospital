"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Consulta_1 = require("./Consulta");
var Medico_1 = require("./Medico");
var Paciente_1 = require("./Paciente");
var Receita_1 = require("./Receita");
var main = function () {
    // Criando um médico
    var medico1 = new Medico_1.Medico("Dr. José da Silva", "123456", "Cardiologia");
    // Criando um paciente
    var paciente1 = new Paciente_1.Paciente("João da Silva", 12);
    // Criando uma consulta
    var dataConsulta = new Date("2024-03-15T10:00:00"); // Formato ISO 8601
    var consulta1 = new Consulta_1.Consulta(medico1, dataConsulta, paciente1);
    // Criando uma receita
    var receita1 = new Receita_1.Receita("Aspirina", consulta1, dataConsulta);
    // Adicionando a receita na consulta
    consulta1.dataC = receita1.dataReceita;
    // Imprimindo informações
    console.log("Consulta:");
    console.log("M\u00E9dico: ".concat(consulta1.medico.nome));
    console.log("Paciente: ".concat(consulta1.paciente.nome));
    console.log("Data da Consulta: ".concat(consulta1.dataC.toLocaleDateString()));
    //  console.log(`Receita: ${consulta1.receita.medicamentos}`);
};
main();
