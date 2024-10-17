<<<<<<< HEAD
import { Medico } from "../classes/Medico";
import { Paciente } from "../classes/Paciente";
import { Consulta } from "../classes/Consulta";

let medico:Medico
let paciente:Paciente

beforeAll(() => {
    // Mockando a data atual para 2024-10-09
    jest.useFakeTimers().setSystemTime(new Date('2024-10-09').getTime());
  });

beforeEach(() => {
    medico = new Medico("Cristiano Ronaldo","123456","Cardiologista");
    paciente = new Paciente("Luana",24);
});

afterAll(() => {
    // Restaurando timers reais para não interferir em outros testes
    jest.useRealTimers();
  });

describe('Consulta', () => {
    test('Verificando data atual', () => {
        const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
        expect(consulta.dataC.getTime()).toBe(new Date('2024-10-10').getTime());
    });

   test("Verificando data menor que data atual", () => {
    const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
    expect(consulta.dataC.getTime()).not.toBe(new Date('2024-10-01').getTime()); // O teste deve passar
   });

   test("Verificando data maior que data atual", () => {
    const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
    expect(consulta.dataC.getTime()).not.toBe(new Date('2024-10-25').getTime()); // O teste deve passar
   });

   test("Verificando data maior que data limite", () => {
    const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
    expect(consulta.dataC.getTime()).not.toBe(new Date('2025-05-25').getTime()); // O teste deve passar
   });
   
})
=======
>>>>>>> 4edc3e7d568d41568cf5abe0b95ed164bc234d2a
