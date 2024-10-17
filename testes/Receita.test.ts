import { Receita } from "../classes/Receita";
import { Consulta } from "../classes/Consulta";
import { Medico } from "../classes/Medico";
import { Paciente } from "../classes/Paciente";

describe('receita', () =>{

    let paciente:Paciente
    let consulta: Consulta
    let medico: Medico

    beforeAll(() => {
        // Mockando a data atual para 2024-10-09
        jest.useFakeTimers().setSystemTime(new Date('2024-10-09').getTime());
      });
    
    beforeEach(() => {
        paciente = new Paciente("Luana",24);
        medico = new Medico("Joao","123456","Cardiologista")
        consulta = new Consulta(medico, new Date('2024-11-05'), paciente)
})

    afterAll(() => {
        // Restaurando timers reais para não interferir em outros testes
        jest.useRealTimers();
    });

    test("Verificando mediciamento", () => {
        const receita1 = new Receita("Dipirona", consulta, new Date('2024-11-05'));
        expect(receita1.medicamentos).toBe("Dipirona");
    })

    test("Verificando mediciamento Atualizado", () => {
        const receita1 = new Receita("Dipirona", consulta, new Date('2024-11-05'));
        receita1.medicamentos = "LCD"
        expect(receita1.medicamentos).toBe("LCD");
    })

    test("Verificando mudança de data", () => {
        const receita1 = new Receita("Dipirona", consulta, new Date("2024-11-05"));
        receita1.dataReceita = new Date("2024-11-06");
        expect(receita1.dataReceita.toISOString().slice(0, 10)).toBe('2024-11-06');
    })

    test("Verificando Data Valida", () => {
        expect(() => new Receita("Dipirona", consulta, new Date('2024-11-06')).verificarData()).toThrow(Error);
    })
    
    
})

