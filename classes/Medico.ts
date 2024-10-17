import { Autentificar } from "./Autentificar";

export class Medico{
    private _nome:string;
    private _credencial: string;
	private _especialidade: string;
	private _codigoAutenticacao: Autentificar;

	constructor(nome: string, credencial: string, especialidade: string) {
		this._nome = nome;
		this.credencial = credencial;
		this._especialidade = especialidade;
	}

	public get nome(): string {
		return this._nome;
	}

	public get credencial(): string {
		return this._credencial;
	}

	public get especialidade():string{
		return this._especialidade;
	}

	public set nome(nome: string){
		this._nome = nome;
	}

	public set credencial(credencial: string) {
		if(!isNaN(parseFloat(credencial)) && (credencial.length) === 6)
			this._credencial = credencial;
	}

	public set especialidade(especialidade:string){
		this._especialidade = especialidade; 
	}



    // public Autenticacao(codigo: string): {
    //     return this._codigoAutenticacao = codigo;
    // }

    // public ValidarAutentificacao(codigoAutenticacao: string): string {
    //     if (this.Autenticacao(codigoAutenticacao)) {
    //         return "Passou...código existente.";
    //     } else {
    //         throw new Error("Erro 404 --- Falha na autenticação...código não existe");
    //     }
	// }
	
}

