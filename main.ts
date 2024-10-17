import { Consulta } from "./Consulta";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Receita } from "./Receita";

const main = () => {
  // Criando um médico
  const medico1 = new Medico("Dr. José da Silva", "123456", "Cardiologia");

  // Criando um paciente
  const paciente1 = new Paciente("João da Silva", 12);

  // Criando uma consulta
  const dataConsulta = new Date("2024-03-15T10:00:00"); // Formato ISO 8601
  const consulta1 = new Consulta(medico1, dataConsulta, paciente1);

  // Criando uma receita
  const receita1 = new Receita("Aspirina", consulta1, dataConsulta);

  // Adicionando a receita na consulta
  consulta1.dataC = receita1.dataReceita;

  // Imprimindo informações
  console.log("Consulta:");
  console.log(`Médico: ${consulta1.medico.nome}`);
  console.log(`Paciente: ${consulta1.paciente.nome}`);
  console.log(`Data da Consulta: ${consulta1.dataC.toLocaleDateString()}`);
//  console.log(`Receita: ${consulta1.receita.medicamentos}`);
};

main();
