export class Medico {
	private _nome: string;
	private _credencial: string;
	private _especialidade: string;
	private _codigoAutenticacao?: string;

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

	public get especialidade(): string {
		return this._especialidade;
	}

	public set nome(nome: string) {
		this._nome = nome;
	}

	public set credencial(credencial: string) {
		if (!isNaN(parseFloat(credencial)) && (credencial.length) === 6) {
			this._credencial = credencial;
		}
	}

	public set especialidade(especialidade: string) {
		this._especialidade = especialidade;
	}

	// Autenticação de Dois Fatores
	public gerarCodigoAutenticacao(): void {
		this._codigoAutenticacao = Math.floor(100000 + Math.random() * 900000).toString();
		console.log(`Código de autenticação do médico: ${this._codigoAutenticacao}`);
	}

	public validarCodigoAutenticacao(codigo: string): boolean { // Renomeado para validar
		return this._codigoAutenticacao === codigo;
	}

	// (Opcional) - Autenticação com validação de erro
	public validarAutentificacao(codigoAutenticacao: string): string {
		if (this.validarCodigoAutenticacao(codigoAutenticacao)) { // Utiliza validarCodigo
			return "Passou...código existente.";
		} else {
			throw new Error("Erro 404 --- Falha na autenticação...código não existe");
		}
	}
}