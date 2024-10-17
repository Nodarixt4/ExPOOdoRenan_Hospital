<<<<<<< HEAD
import { Paciente } from "../classes/Paciente";

describe('paciente', () =>{
    
    // TESTE NOME

   test("Verificação do nome inicial", () => {
        const paciente = new Paciente("Lucas", 25);
        expect(paciente.nome).toBe("Lucas");
    })

    test("Verificação da atualização do nome", () => {
        const paciente = new Paciente("Lucas", 25);
        paciente.nome = "Guilherme";
        expect(paciente.nome).toBe("Guilherme");
    })
    
    test("Verificação espaços vazios", () => {
        const paciente = new Paciente("Lucas", 25);
        paciente.nome = ""; // nome inválido
        expect(paciente.nome).toBe("Lucas"); // TEM QUE FALHAR
    })

    test("Nome muito curto", () => {
        const paciente = new Paciente("Lucas", 25);
        paciente.nome = "J".repeat(30);
        expect(paciente.nome).toBe("Lucas"); // TEM QUE FALHAR
    })

    test("Espaços em Branco", () => {
        const paciente = new Paciente("Lucas", 25);
        paciente.nome = "   ";
        expect(paciente.nome).toBe("Lucas"); // TEM QUE FALHAR
    })

    // TESTE IDADE

    test("Idade correta", () => {
        const paciente = new Paciente("Lucas", 21);
        expect(paciente.idade).toBe(21);
    })

    test("Validar Idade", () => {
        expect(() => new Paciente("Lucas", 50)).toThrow(Error); // TEM QUE FALHAR
    })
    
    test("Validar Idade Menor que 120", () => {
        expect(() => new Paciente("Lucas", 120)).toThrow(Error);
    })

    
})
=======
>>>>>>> 4edc3e7d568d41568cf5abe0b95ed164bc234d2a
