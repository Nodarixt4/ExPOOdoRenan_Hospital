import { Medico } from "./Medico";

describe('Medico', () => {
    // TESTE NOME

    test("Verificação do nome inicial", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        expect(medico.nome).toBe("Cristiano Ronaldo");
    });

    test("Verificação da atualização do nome", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.nome = "João Paulo";
        expect(medico.nome).toBe("João Paulo");
    });

    test("Verificação espaços vazios", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.nome = ""; // nome inválido
        expect(medico.nome).toBe("Cristiano Ronaldo"); // TEM QUE FALHAR
    });

    test("Nome muito curto", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.nome = "J".repeat(30);
        expect(medico.nome).toBe("Cristiano Ronaldo"); // TEM QUE FALHAR
    });

    test("Espaços em Branco", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.nome = "   ";
        expect(medico.nome).toBe("Cristiano Ronaldo"); // TEM QUE FALHAR
    });


    // TESTE CREDENCIAL

    test("Credencial Atual", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        expect(medico.credencial).toBe("123456");
    });

    test("Credencial atualizada", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.credencial = "789234";
        expect(medico.credencial).toBe("789234");
    });

    test("Credencial atualizada com Erro", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.credencial = "7892345"; // Mais de 6 dígitos
        expect(medico.credencial).toBe("123456"); // TEM QUE FALHAR
    });

    test("Credencial com letras", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.credencial = "123abc"; // Contém letras
        expect(medico.credencial).toBe("123456"); // TEM QUE FALHAR
    });

    // TESTE ESPECIALIZAÇÃO

    test("Especialização Atual", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        expect(medico.especialidade).toBe("Cardiologista");
    });

    test("Atualização Especialidade", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.especialidade = "Urologista";
        expect(medico.especialidade).toBe("Urologista");
    });

    test("Atualização Especialidade Errada", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.especialidade = "Ginecologista";
        expect(medico.especialidade).toBe("Cardiologista"); // TEM QUE FALHAR
    });

    test("Espaço vazio", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.especialidade = "";
        expect(medico.especialidade).toBe("Cardiologista"); // TEM QUE FALHAR
    });

    test("Espaço em Branco", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.especialidade = "   ";
        expect(medico.especialidade).toBe("Cardiologista"); // TEM QUE FALHAR
    });

    test("Nome Curto", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.especialidade = "U".repeat(30);
        expect(medico.especialidade).toBe("Cardiologista"); // TEM QUE FALHAR
    });

    //teste da parada do topico 4

    test("Código de autenticação gerado", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.gerarCodigoAutenticacao();
        expect(medico['_codigoAutenticacao']).toHaveLength(6); // Verifica que o código tem 6 dígitos
    });

    test("Autenticação bem-sucedida e receita emitida", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.gerarCodigoAutenticacao();
        const codigo = medico['_codigoAutenticacao'];
        if (codigo) {
            expect(medico.validarAutentificacao(codigo)).toBe("Passou...código existente.");
        } else {
            throw new Error("Código de autenticação não foi gerado corretamente.");
        }
    });

    test("Falha na autenticação", () => {
        const medico = new Medico("Cristiano Ronaldo", "123456", "Cardiologista");
        medico.gerarCodigoAutenticacao();
        
        expect(() => medico.validarAutentificacao("000000")).toThrow("Erro 404 --- Falha na autenticação...código não existe");
    });
});